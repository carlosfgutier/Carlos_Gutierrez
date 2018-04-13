$(window).scroll(function(e) {
	parallax();
});

function parallax() {

	var scroll = $(window).scrollTop();

	$('.parallax-bg').css('background-position', 'center ' +(scroll*0.75)+ 'px');

	$('#pinkSquare1').css('bottom', -100 -(scroll*0.75)+ 'px');
	
};