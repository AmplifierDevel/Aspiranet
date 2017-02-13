// Fadein effect on scroll 
$(document).ready(function(){	

    //move color block on mouse move 

    var bg = $('.moveBlock');
    var windowWidth = $(window).innerWidth()/10;
    var windowHeight = $(window).innerHeight()/10;
   
    $('.program-content').on('mousemove', function(e){
        var mouseX = (e.clientX / windowWidth).toFixed(2);
        var mouseY = (e.clientY / windowHeight).toFixed(2);
        bg.css("transform","translate3d(" + mouseX +"px ,"+ mouseY + "px , 0px)");
    }); 

    //end of mouse move animation

    $(window).scroll( function(){
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        $('.landInBlock').each(function(){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            
            if (bottom_of_window > bottom_of_object ) {
                $(this).animate({
                    'top': '0',
                    'opacity':'1',
                    'easing': 'easeInExpo'
                },{ duration: 600})
                .delay(300)
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