$(document).ready(function(){	
//programs menu to fixed on scroll

	var fixTop = $('.programFixedNav').offset().top;       
	$(window).scroll(function() {                 

	    var currentScroll = $(window).scrollTop(); 
	    if (currentScroll >= fixTop) { 
	        $('.programFixedNav').addClass('fixed');
	    } else {     
	        $('.programFixedNav').removeClass('fixed');
	    }
	});
});