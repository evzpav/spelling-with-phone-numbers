
const express = require('express');
const app = express();
const cors = require('cors');
const serveStatic = require('serve-static');
const port = process.env.PORT || 3000;

const getCombinations = require('./logic');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false, limit: '500kb' }));
app.use(bodyParser.json({ limit: '500kb' }));

app.use(cors());

app.use(serveStatic(__dirname + "/client"));

app.post('/suggestions', async (req, res) => {
  try {

    // console.log(req.body.data)
    const body = req.body.data;

    const combinations = getCombinations(body)

    res.json(combinations)
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: e.toString() });
  }

});
app.listen(port, () => console.log(`Listening on port ${port}!`));

