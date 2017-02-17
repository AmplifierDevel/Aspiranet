$(document).ready(function(){
		
	//Mobile menu 
	$('.menu-icon').on('click', function(e) {
		$('.trigger').slideToggle();
        $('.trigger').css('background-color', 'white');
        $('.menu-icon').toggleClass("icon-active");
    });
	//end of mobile menu

	$('.latest-front .col-1-3').bind('touchstart touchend', function(e){
		console.log(this);
		$(this).toggleClass('.hover');
	});

	//Programs navigation
	$('#programsNavItem').mouseenter(function() {
		$('.nav-programs a p').addClass('blue-light');
		$('#programsNav').slideDown();
	});

	$('#programsNav').mouseleave(function() {
		slideUpNav();
	});

	$(window).scroll(function(){ 
		slideUpNav();
	});

	var slideUpNav = function() {
		$('.nav-programs a p').removeClass('blue-light');
		$('#programsNav').slideUp();
	};
	// end of program navigation

	$("#mc-embedded-subscribe-form").submit(function(e) {
	  e.preventDefault();

	  var $form = $(this);
	  $.post($form.attr("action"), $form.serialize()).then(function() {
	    $('#mc_embed_signup').html('<p>Thank you for joining!</p>');
	  });
	});

	//Hero images fade in animation

	elementToFadeIn = $('.fadeInBlock');

	elementToFadeIn.each(function() {
        $(this).animate({
            'opacity':'1',
            'easing': 'easeOutCirc'
        }, 1000);
    });


    //Parallax
    var prlxBg = function() {
    	var prlxItem = $('.prlx-bg');
    	var speed = 0.02;
    	$(window).scroll(function(){ 
    		prlxItem.each(function(){
    			var windowYOffset = $(window).scrollTop(),
	          	elBackgrounPos = "0 " + (windowYOffset * speed) + "px";
	      
	      		$(this).css('background-position', elBackgrounPos);
    		});
    	});
    };
    prlxBg();

    //end of parallax
});