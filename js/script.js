$(document).ready(function () {
	$(".sliderf").slick({
		accessibility: false,
		swipe: false,
		swipeToSlide: false,
		draggable: false,
		arrows: false,
		infinite: true,
		slidesToScroll: 1,
		autoplay: true,
		autoplayspeed: 3000,
		fade: true,
		cssEase: "linear",
		pauseOnHover: false,
		pauseOnFocus: false,
		touchMove: false,
		adaptiveHeight: true
	});

	var alturaBanner = $(".slick-list").height();
	$(".bannerEstatico").css({ height: alturaBanner + "px" });

	$(window).scroll(function () {
		var posY = window.pageYOffset;

		if (posY > alturaBanner) {
			// $("header").css("background-color", "white");
			$("header .logotipo").css("filter", "invert(100%)");
			$(".fa-search, .fa-bars").css("color", "black");
		} else {
			$("header").css("background-color", "rgba(0,0,0,0.5)");
			$("header .logotipo").css("filter", "invert(0%)");
			$(".fa-search, .fa-bars").css("color", "white");
		}
	});

	/* ------------------------------- ANCHOR MENU ------------------------------ */
	$(".fa-bars").click(function () {
		$(".menu").fadeIn("fast");
	});
	$(".btnClose").click(function () {
		$(".menu").fadeOut("fast");
	});
});
