$(document).ready(function(){
	if (parseInt($(window).width()) > 1023) {
		$(function() {
		    $.scrollify({
		        section : ".program-item",
		        offset : -180,
		        easing: "easeOutExpo",
		        before:function(index, sections) {
		        	var ref = sections[index].attr('id');
		        		$(".program-nav-item a").removeClass("active");
		        		var thisLink = $(".program-nav-item").find('a[href=#'+ ref + ']');
			        	thisLink.addClass("active");
			    }
			});
		});
	}
});