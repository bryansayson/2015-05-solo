var isValidWord = function (word) {
  var valid = true;
	var splitted = randomletters.split('');
	for ( var i = 0; i < word.length; i++ ) {
        if ( splitted.indexOf(word.charAt(i)) === -1 ) {
          valid = false;
        }
	}
  return valid;
}

var score = 0;
var wordcount = 0;
var words = [ ];