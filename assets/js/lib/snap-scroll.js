var delta = 0;
var currentSlideIndex = 0;
var scrollThreshold = 30;
var slides = $('.program-item');
var numSlides = slides.length;


function elementScroll (e) {
  console.log (Math.abs(delta));
	// --- Scrolling up ---
	if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {	
 
		delta--;
 
		if ( Math.abs(delta) >= scrollThreshold) {
		prevSlide();
		}
	}
 
	// --- Scrolling down ---
	else {
 
		delta++;
 
		if (delta >= scrollThreshold) {
			nextSlide();
		}
	}
 
	// Prevent page from scrolling
	return false;
}
 
 
function showSlide() {
 
	// reset
	delta = 0;
 
	slides.each(function(i, slide) {
		$(slide).toggleClass('active', (i >= currentSlideIndex));
	});
 
}
 
 
function prevSlide() {
 
	currentSlideIndex--;
 
	if (currentSlideIndex < 0) {
		currentSlideIndex = 0;
	}
 
	showSlide();
}
 
function nextSlide() {
 
	currentSlideIndex++;
 
	if (currentSlideIndex > numSlides) { 
		currentSlideIndex = numSlides;
	}
 
	showSlide();
}
 
$(window).on({
	'DOMMouseScroll mousewheel': elementScroll
});