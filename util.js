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

// dictionary loader
// The dictionary lookup object
var dict = {};
 
// Do a jQuery Ajax request for the text dictionary
$.get( "dict.txt", function( txt ) {
    // Get an array of all the words
    var words = txt.split( "\n" );
 
    // And add them as properties to the dictionary lookup
    // This will allow for fast lookups later
    for ( var i = 0; i < words.length; i++ ) {
        dict[ words[i] ] = true;
    }
  });