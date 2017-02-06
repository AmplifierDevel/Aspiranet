$(document).ready(function(){

	//Mobile menu 
	$('.menu-icon').on('click', function(e) {
		$('.trigger').slideToggle();
        $('.trigger').css('background-color', 'white');
        $('.menu-icon').toggleClass("icon-active");
    });
	//end of mobile menu

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

	$("#mc-embedded-subscribe-form").submit(function(e) {
	  e.preventDefault();

	  var $form = $(this);
	  $.post($form.attr("action"), $form.serialize()).then(function() {
	    $('#mc_embed_signup').html('<p>Thank you for joining!</p>');
	  });
	});

});