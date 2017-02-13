var contactForm = $("#contact");
var applyForm = $('#apllication-form');

contactForm.submit(function(e) {
	var response = '<h4>Thank you! We have received your email and will be in touch soon.</h4>'
  	ajaxFunc();
});
applyForm.submit(function(e){
	var response = '<h4>Thank you! We have received your application and will be in touch soon.</h4>'
	ajaxFunc();
});

var ajaxFunc = function() {
	e.preventDefault();
  	var $form = $(this);
	$.post($form.attr("action"), $form.serialize()).then(function() {
	   $(this).hide();
	   $(response).appendTo('.contact-form');
	});
};
