angular.module('app', [])

.controller('WordController', function($scope, Words) {
  angular.extend($scope, Words)
})
.factory('Words', function() {
  var addWords = function(word) {
    console.log('WORD IS :' + word);
    console.log('IN DICTIONARY? :' + dict.word);
    if ( isValidWord(word) && dict.word === true && words.indexOf(word) === -1) {
      words.push(word);
      score += wordScore(word);
      wordcount++;
    }
  };
  return {
    words: words,
    addWords: addWords
  }
});

var isValidWord = function (word) {
  var valid = true;
  var splitted = randomletters.split('');
  for ( var i = 0; i < word.length; i++ ) {
        if ( splitted.indexOf(word.charAt(i)) === -1 ) {
          valid = false;
        }
  }
  return valid;
};

var wordScore = function (word) { 
  var total = 0
  for ( var i = 0; i < word.length; i++ ) {
    var curr = word.charAt(i)
    if (curr === 'd' || curr === 'g') {
      total += 2;
    } else if (curr === 'b' || curr === 'c' || curr === 'm' || curr === 'p') {
      total += 3;
    } else if (curr === 'f' || curr === 'h' || curr === 'v' || curr === 'w' || curr === 'y') {
      total += 4;
    } else if (curr === 'k' ) {
      total += 5;
    } else if (curr === 'j' || curr === 'x') {
      total += 8;
    } else if (curr === 'q' || curr === 'z') {
      total += 10;
    } else {
      total += 1;
    }
  };
  return total;
};