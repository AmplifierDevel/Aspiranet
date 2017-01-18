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

	// Nav menu toggle 

   $('.menu-icon').on('click', function(e) {
        $('.trigger').toggleClass('hoverTouch').css('background-color', 'white');
        $('.menu-icon').toggleClass("icon-active");
    });

    $('ul.tabs').each(function(){
      var active, content, links = $(this).find('a');

      active = links.first().addClass('active');
      content = $(active.attr('href'));
      links.not(':first').each(function () {
        $($(this).attr('href')).hide();
      });
      $(this).find('a').click(function(e){
        active.removeClass('active');
        content.hide();
        active = $(this);
        content = $($(this).attr('href'));
        active.addClass('active');
        content.show();
        return false;
      });
    });

	$('.stories-slider').unslider({
		autoplay: true,
		infinite: true,
		delay: 6000,
		arrows: true,
		nav: false
	});
	 $('.campaign-slider').unslider({
		arrows: false,
		autoplay: true,
		infinite: true,
		delay: 6000
	});
	$('.similar-posts-wrapper').unslider({
		arrows: true,
		autoplay: false,
		infinite: false,
		nav: false,
		arrows: {
			prev: '<a class="unslider-arrow prev"><p class="small caps round color-orange no-margin-bottom"><-- Previous post</p></a>',
			next: '<a class="unslider-arrow next"><p class="small caps round color-orange no-margin-bottom">Next post --></p></a>',
		}
	});
	// searching for orphans TODO: make sure it doesn't affect html tags
   // $('p, h3, h4').each(function(){
   //      var string = $(this).html();
   //      string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
   //      $(this).html(string);
   //  });
});
