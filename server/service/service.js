const words_dictionary = require("../words/words_dictionary.json")

let lettersToNumbers = {
  "a": "2", "b": "2", "c": "2", "d": "3", "e": "3", "f": "3", "g": "4", "h": "4", "i": "4", "j": "5", "k": "5", "l": "5", "m": "6", "n": "6", "o": "6", "p": "7", "q": "7", "r": "7", "s": "7", "t": "8", "u": "8", "v": "8", "w": "9", "x": "9", "y": "9", "z": "9"
}

function Service() {

  this.numbersToWords = {}

  function mapNumberToWords(words_dictionary) {
    let words = Object.keys(words_dictionary)
    let mappedWords = {}
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let wordNumber = ""
      for (let j = 0; j < word.length; j++) {
        if (lettersToNumbers[word.charAt(j)]) {
          wordNumber += lettersToNumbers[word.charAt(j)]
        }

      }
      if (!mappedWords[wordNumber]) {
        mappedWords[wordNumber] = [word];
      } else {
        mappedWords[wordNumber].push(word)
      }

    }
    return mappedWords;
  }


  function getCombinations(number) {

    let numbersStr = number.replace(/\D/g, "");

    if (numbersToWords[numbersStr]) {
      return  numbersToWords[numbersStr]
    }

    return [];

  }

  function init() {
    this.numbersToWords = mapNumberToWords(words_dictionary)
  }

  init()

  return {
    getCombinations
  }

}


module.exports = Service;

