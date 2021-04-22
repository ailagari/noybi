function resize() {

}

$(document).ready(function () {
	resize();

	$('.header div.content .menu-icon').click(function () {
		$('.header div.content .main-menu').slideDown("slow", function () {
			$('.header div.content span.menu-icon').hide();
			$('.header div.content span.close').show();
		});
	});

	$('.header div.content span.close').click(function () {
		$('.header div.content .main-menu').slideUp("slow", function () {
			$('.header div.content span.close').hide();
			$('.header div.content span.menu-icon').show();
		});
	});
});

// modal script




