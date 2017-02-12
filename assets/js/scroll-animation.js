// Fadein effect on scroll 
$(document).ready(function(){	
	$(window).scroll( function(){
        $('.landInBlock').each(function(){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window + 0;  
          
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({
                	'top': '0',
                	'opacity':'1',
                    'easing': 'easeInExpo'
                }, 600);       
            }
        }); 
    });
});