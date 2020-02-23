
const express = require('express');
const app = express();
const cors = require('cors');
const serveStatic = require('serve-static');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const Service = require('./service/service')();
const Controller = require('./controller/controller')(Service);

app.use(bodyParser.urlencoded({ extended: false, limit: '500kb' }));
app.use(bodyParser.json({ limit: '500kb' }));
app.use(cors());
app.use(serveStatic(__dirname + "../../client"));

app.post('/suggestions', Controller.postWordCombinations);

app.listen(port, () => console.log(`Listening on port ${port}!`));

