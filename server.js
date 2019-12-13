
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const serveStatic = require('serve-static');
const port = process.env.PORT || 3000;
axios.defaults.headers.common = {'Content-Type': 'application/json'};

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false, limit: '500kb' }));
app.use(bodyParser.json({ limit: '500kb' }));

app.use(cors());

app.use(serveStatic(__dirname+ "/client" ));

app.post('/suggestions', async (req, res) => {
  try {

    console.log(req.body.data)
    const body = req.body.data;

    const combinations = getCombinations(body)

    res.json(combinations)
  } catch (e) {
    console.log(e)
    res.status(500).json({error: e.toString()});
  }
  
});
app.listen(port, () => console.log(`Listening on port ${port}!`));


const words_dictionary = require("./words/words_dictionary.json")
const dict = require('spell').spell();

dict.load({ corpus: words_dictionary });


function combinations(array) {
  if (array.length == 1) {
    return array[0];
  } else {
    let result = [];
    let rest = combinations(array.slice(1));
    for (let i = 0; i < rest.length; i++) {
      for (let j = 0; j < array[0].length; j++) {
        result.push(array[0][j] + rest[i]);
      }
    }
    return result;
  }

}


function getCombinations(number) {

  let numbersLetters = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  }


  let numbersStr = number.replace(/\D/g, "").split("");

  let myArrays = []
  for (let i = 0; i < numbersStr.length; i++) {
    let arrayOfLetters = numbersLetters[numbersStr[i]]
    myArrays.push(arrayOfLetters)
  }

  combinationsResult = combinations(myArrays);
  combinationsResult.sort();

  let result = [];
  for (let i = 0; i < combinationsResult.length; i++) {
    let suggestion = dict.suggest(combinationsResult[i]);
    if (suggestion) {
      result.push(suggestion);
    }
  }

  return result;

}


