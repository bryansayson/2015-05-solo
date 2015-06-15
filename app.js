angular.module('app', [])

.controller('WordController', function($scope, Words) {
  angular.extend($scope, Words)
})
.factory('Words', function() {
  var words = [];
  var addWords = function(word) {
    if ( words.indexOf(word) === -1 && isValidWord(word) ) {
      words.push(word);
      score += word.length;
      wordcount++;
    }
    console.log(randomletters);
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