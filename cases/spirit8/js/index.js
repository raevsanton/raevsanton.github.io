$(document).ready(function () {
	//Anchors
	$("a[href]").on("click", function (e) {
		let anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 777);
		e.preventDefault();
		return false;
	});

	//Slider
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

	//Fixed menu
	$(function (f) {
		$(window).scroll(function () {
			$('header')[($(this).scrollTop() > 55 ? "add" : "remove") + "Class"]("bar_fixed");
		});
	});

	//Burger menu
	$("body").on('click', '.top', function() {
		$("nav.menu").toggleClass("menu_show");
	});
	let toggles = document.querySelectorAll(".cmn-toggle-switch");
	for (let i = toggles.length - 1; i >= 0; i--) {
		let toggle = toggles[i];
		toggleHandler(toggle);
	}
	function toggleHandler(toggle) {
		toggle.addEventListener( "click", function(e) {
			e.preventDefault();
			(this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
		});
	}
});