$(window).scroll(function(e) {
	parallax();
});

function parallax() {

	var scroll = $(window).scrollTop();

	// mobile ft project
	$('.parallax-bg').css('background-position', 'center ' +(scroll*0.75)+ 'px');

	// about me
	$('#greenSquare1').css('bottom', -100 -(scroll*0.75)+ 'px');
	$('#greenSquare1').css('right', (scroll*0.75)+ 'px');
	$('#greenSquare1').css('transform', 'rotate(' + -2 *(scroll*0.105) + 'deg)');

	// skills
	$('#communication-bg').css('transform', 'rotate(' + 5+(scroll*0.025) + 'deg)');
	$('#organization-bg').css('transform', 'rotate(' + -5+(scroll*0.025) + 'deg)');
	$('#collaboration-bg').css('transform', 'rotate(' + 5+(scroll*0.025) + 'deg)');
	$('#design-bg').css('transform', 'rotate(' + -5+(scroll*0.025) + 'deg)');
	$('#time-bg').css('transform', 'rotate(' + 5+(scroll*0.025) + 'deg)');

	
};