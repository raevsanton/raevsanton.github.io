$(document).ready(function () {
	$("a[href]").on("click", function (e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 777);
		e.preventDefault();
		return false;
	});

	$('.responsive').slick({
		dots: true,
		infinite: false,
		speed: 300,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	$(function (f) {
		$(window).scroll(function () {
			$('header')[($(this).scrollTop() > 55 ? "add" : "remove") + "Class"]("bar_fixed");
		});
	});
});