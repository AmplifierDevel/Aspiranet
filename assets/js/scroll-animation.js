// Fadein effect on scroll 
$(document).ready(function(){	

    $(window).scroll( function(){
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        $('.fadeInBlockOnScroll').each(function(){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            if (bottom_of_window > bottom_of_object ) {
                $(this).animate({
                    'opacity':'1',
                    'easing': 'easeOutCirc'
                }, 800);
            }
        });

        $('.landInBlock').each(function(){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            
            if (bottom_of_window > bottom_of_object ) {
                $(this).animate({
                    'top': '0',
                    'opacity':'1',
                    'easing': 'easeInExpo'
                },{ duration: 600})
                .delay(600)
                .queue(
                    function() {
                        $('.slideUpBlock').each(function(){
                            $(this).animate({
                                    'top': '0',
                                    'opacity':'1',
                                    'easing': 'easeOutQuart' 
                            }, { duration: 600, queue: true});
                        });
                        return $(this).dequeue();
                    }
                );       
            }
        }); 
    })
});