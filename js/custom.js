$(window).load(function() {

	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow");
	
});

$(window).scroll(function () {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		}
		else {
			$('.top').removeClass('active');
		}
	});

	$('.top').click(function () {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});