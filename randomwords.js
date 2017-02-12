var Word = require("./word.js");

module.exports = {
 
  chooseWord : function() {
    var words = ["philadelphia phillies", "philadelphia union", "philadelphia flyers", "philadelphia 76ers", "philadelphia eagles", "rutgers scarlett knights"];
    var num = Math.floor(Math.random() * words.length);
    var word = new Word(words[num]);
    return word;
  }
};