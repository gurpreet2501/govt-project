jQuery(function($){

	// Stop marquee on mouse over
	   $('marquee').mouseover(function() {
      		$(this).attr('scrollamount',0);
	    }).mouseout(function() {
	         $(this).attr('scrollamount',3);
	    });
});