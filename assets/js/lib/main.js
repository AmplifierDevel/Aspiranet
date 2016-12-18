$(document).ready(function(){
	$('#programsNavItem').mouseenter(function(e) {
		$('#programsNav').css('display', 'block');
		$('.nav-programs a').css('background-color', '#F8F8F7')
	});
	$('#programsNav').mouseleave(function(e) {
		$('#programsNav').css('display', 'none');
		$('.nav-programs a').css('background-color', 'white')
	});

	// searching for orphans
   $('p, h3, h4').each(function(){
        var string = $(this).html();
        string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
        $(this).html(string);
    });
});
