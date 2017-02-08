$(document).ready(function(){
	$(function() {
	    $.scrollify({
	        section : ".program-item",
	        offset : -180,
	        touchScroll: false,
	        easing: "easeOutExpo",
	        before:function(index, sections) {
	        	var ref = sections[index].attr('id');
	        		$(".program-nav-item a").removeClass("active");
	        		var thisLink = $(".program-nav-item").find('a[href=#'+ ref + ']');
		        	thisLink.addClass("active");
		    }
		});
	});
});