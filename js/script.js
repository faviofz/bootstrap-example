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
		touch: false,
		autoHeight: true
	});

	var alturaBanner = $(".my-slider").height();
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
});
