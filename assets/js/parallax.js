$(window).scroll(function(e) {
	parallax();
});

function parallax() {

	var scroll = $(window).scrollTop();
	var screenHeight = $(window).height();

	console.log(scroll +' ----- '+ screenHeight);

	$('.parallax-bg').each(function() {
		var offset = $(this).offset().top;
		var dft = offset - scroll - screenHeight;

		if (offset > screenHeight && offset) {
			$(this).css('background-position', 'center ' + (( -dft ) *0.5) + 'px');
		} else {
			$(this).css('background-position', 'center ' + (( scroll ) *0.5) + 'px');
		}
	});
};