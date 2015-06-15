var clock;
		
$(document).ready(function() {
var clock;
clock = $('.clock').FlipClock({
clockFace: 'MinuteCounter',
autoStart: false,
  callbacks: {
      stop: function() {
          $('.message').html('The clock has stopped!');
          $('.inputs').hide();
          $('.score').text(score);
          $('.word-count').text(wordcount);
          $('.thanks').show();
      }
    }
});
		    

clock.setTime(000005);
// clock.setTime(000200);
clock.setCountdown(true);
clock.start();

});

// .animate({
//             left: '250px'
//           });