
$(document).ready(function() {
console.log ('this is a test');
	
// Create modal effect for the sign up button
	$('.modalClick').on('click', function(e) {

        e.preventDefault();
        $('#overlay')
          .fadeIn()
          .find('#modal')
          .fadeIn();

      });

      $('.close').on('click', function(e) {
        e.preventDefault();
        $('#overlay')
          .fadeOut()
          .find('#modal')
          .fadeOut();

      });
	
			
			
		
});