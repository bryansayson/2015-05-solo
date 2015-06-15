var randomletters;

$(document).ready(function() {
    var letters = [];
    var vowels = "aeiou";
    var possible = "bcdfghjklmnpqrstvwxyz";
    for( var i=0; i < 5; i++ )
         letters.push(possible.charAt(Math.floor(Math.random() * possible.length)));
    for( var i=0; i < 4; i++ )
        letters.push(vowels.charAt(Math.floor(Math.random() * vowels.length)));
    randomletters = _.shuffle(letters);
    randomletters = randomletters.join('');
// set to random letters
    $('.randomletters').text(randomletters);
//on click clear text field
    $('.wordSubmit').on('click', function () {
    	console.log('CLICKED');
      $('.word-input').val('');
      });
// enable enter
    $( ".word-input" ).keyup(function(event){
      if  ( event.keyCode == 13 ) {
        $( "#submitButton" ).click();
        $('.game-title').fadeOut(100).fadeIn(100);
      }
    });

});