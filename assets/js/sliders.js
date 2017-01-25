$(document).ready(function(){
	$('.more-programs-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
  		focusOnSelect: true,
  		centerPadding: '0px'
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