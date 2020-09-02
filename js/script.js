$(document).ready(function () {
	var slider = tns({
		container: ".my-slider",
		items: 1,
		mode: "gallery",
		controls: false,
		nav: false,
		speed: 500,
		autoplay: true,
		autoplayButtonOutput: false,
		touch: false
	});

	var alturaBanner = $(".my-slider div.img").height();
	console.log(alturaBanner);
	$(".bannerEstatico").css({ height: alturaBanner + "px" });
});
// var alturaBanner = $("div.bx-viewport").style.height;
// console.log(alturaBanner);
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
