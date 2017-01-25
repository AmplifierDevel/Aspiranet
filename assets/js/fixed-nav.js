$(document).ready(function(){	
//programs menu to fixed on scroll

	var fixTop = $('.programFixedNav').offset().top - 102;       
	console.log('fixmeTop: '+ fixTop);
	$(window).scroll(function() {                 

	    var currentScroll = $(window).scrollTop(); 
	    console.log('currentScroll: '+ currentScroll);
	    if (currentScroll >= fixTop) { 
	    	$('.programFixedNavPhantom').show();
	        $('.programFixedNav').css({                      
	            position: 'fixed',
	            top: '100px',
	            left: '0',
	            right: '0'
	        });
	    } else {     
	    	$('.programFixedNavPhantom').hide();    
	        $('.programFixedNav').css({                      
	            position: 'static'
	        });
	    }
	});
});