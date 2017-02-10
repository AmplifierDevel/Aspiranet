$("#contact").submit(function(e) {
  e.preventDefault();
  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    $("#contact").hide();
    var response = '<h4>Thank you! We have received your email and will be in touch soon.</h4>'
  	$(response).appendTo('.contact-form');
  });
});