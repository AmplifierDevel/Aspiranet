$(document).ready(function(){
	if ($('.nav-programs a').hasClass('active')) {
		$('.nav-programs a').css('border-top', 'none');
	} else {
		$('.nav-programs a').css({
			'background-color': 'white',
			'border-top': '5px solid white'
		});
	}
	$('#programsNavItem').mouseenter(function(e) {
		$('#programsNav').css('display', 'block');
		$('.nav-programs a').css({
			'background-color': '#F8F8F7',
			'border-top': '5px solid rgb(248, 248, 247)'
		});
		if ($('.nav-programs a').hasClass('active')) {
			$('.nav-programs a').css('border-top', 'none');
		}
	});
	$('#programsNav').mouseleave(function(e) {
		$('#programsNav').css('display', 'none');
		$('.nav-programs a').css({
			'background-color': 'white',
			'border-top': '5px solid white'
		});
		if ($('.nav-programs a').hasClass('active')) {
			$('.nav-programs a').css('border-top', 'none');
		}
	});

	
	// $('.similar-posts-wrapper').unslider({
	// 	arrows: true,
	// 	autoplay: false,
	// 	infinite: false,
	// 	nav: false,
	// 	arrows: {
	// 		prev: '<a class="unslider-arrow prev"><p class="small caps round color-orange no-margin-bottom"><-- Previous post</p></a>',
	// 		next: '<a class="unslider-arrow next"><p class="small caps round color-orange no-margin-bottom">Next post --></p></a>',
	// 	}
	// });
});