$(document).ready(function () {
	var alturaBanner = $("header").height();
	$(".bx-viewport").css({ height: alturaBanner + "px" });

	$(".bxslider").bxSlider({
		mode: "fade",
		speed: 3000,
		// hideControlOnEnd: true,
		touchEnabled: false,
		controls: false,
		auto: true,
		pager: false,
		wrapperClass: "f-wrapper"
	});
});
// var alturaBanner = $(".slick-list").height();
// $(".bannerEstatico").css({ height: alturaBanner + "px" });

// $(window).scroll(function () {
// 	var posY = window.pageYOffset;

// 	if (posY > alturaBanner) {
// 		// $("header").css("background-color", "white");
// 		$("header .logotipo").css("filter", "invert(100%)");
// 		$(".fa-search, .fa-bars").css("color", "black");
// 	} else {
// 		$("header").css("background-color", "rgba(0,0,0,0.5)");
// 		$("header .logotipo").css("filter", "invert(0%)");
// 		$(".fa-search, .fa-bars").css("color", "white");
// 	}
// });

// /* ------------------------------- ANCHOR MENU ------------------------------ */
// $(".fa-bars").click(function () {
// 	$(".menu").fadeIn("fast");
// });
// $(".btnClose").click(function () {
// 	$(".menu").fadeOut("fast");
// });
