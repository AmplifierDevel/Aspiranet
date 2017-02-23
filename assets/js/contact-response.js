var contactForm = $("#contact");
var applyForm = $('#application-form');

contactForm.submit(function(e) {
	e.preventDefault();
  	var $form = $(this);
	$.post($form.attr("action"), $form.serialize()).then(function() {
	   $(contactForm).hide();
	   var response = '<h4>Thank you! We have received your email and will be in touch soon.</h4>'
	   $(response).appendTo('.contact-form');
	   window.location.replace("/thank-you-for-your-interest");
	});
});

applyForm.submit(function(e){
	e.preventDefault();
  	var $form = $(this);
	$.post($form.attr("action"), $form.serialize()).then(function() {
	   $(applyForm).hide();
	   var response = '<h4>Thank you! We have received your application and will be in touch soon.</h4>'
	   $(response).appendTo('.contact-form');
		window.location.replace("/thank-you-for-your-interest-in-foster")
	});
});


