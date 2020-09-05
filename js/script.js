$(document).ready(function () {
	var slide = $("#my-carousel").carousel({
		interval: 2000,
		pause: false
	});
	slide.carousel("cycle");

	var alturaBanner = $("#my-carousel").height();
	$(".bannerEstatico").css({ height: alturaBanner + "px" });

	$(window).scroll(function () {
		var posY = window.pageYOffset;

		if (posY > alturaBanner) {
			$(".my-slider").css("display", "none");
			$("header").css("background-color", "white");
			$("header .logotipo").css("filter", "invert(100%)");
			$(".fa-search, .fa-bars").css("color", "black");
		} else {
			$(".my-slider").css("display", "block");
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

	/* -------------------------- ANCHOR GRID CATEGORIA ------------------------- */

	$(".grid figure").mouseover(function () {
		$(this).css({ "background-position": "right bottom" });
	});

	$(".grid figure").mouseout(function () {
		$(this).css({ "background-position": "left top" });
	});

	/* ---------------------------- ANCHOR PAGINACION --------------------------- */

	$(".pagination").twbsPagination({
		totalPages: 10,
		visiblePages: 4,
		first: "",
		last: "",
		prev: `<i class="fas fa-angle-left "></i>`,
		next: `<i class="fas fa-angle-right"></i>`,
		hideOnlyOnePage: true
	});

	/* --------------------------- ANCHOR SCROLLMAGIC --------------------------- */

	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({
		triggerElement: ".containerInicio" // starting scene, when reaching this element
	}).setClassToggle(".containerInicio", "show"); // the element we want to pin

	// Add Scene to ScrollMagic Controller
	controller.addScene(scene);

	/* ----------------------------- ANCHOR SCROLLUP ---------------------------- */

	$.scrollUp({
		scrollText: "",
		scrollSpeed: 2000,
		easingType: "easeOutQuint"
	});
});
