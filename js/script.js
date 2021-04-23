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
	$(document).ready(function () {

		$('.group').hide();
		$('#blk-1').show();
		$('#selectMe').change(function () {
			$('.group').hide();
			$('#' + $(this).val()).show();
		})
	});

	$('#blk-1 div.drop').click(function () {
		$('#blk-1 div.drop.active').not(this).find('span').removeClass('chevron-down').addClass('chevron-up');
		$('#blk-1 div.drop.active').not(this).removeClass('active').parent('div.dropdown_list').find('ul.droplist').slideUp();
		$(this).parent('div.dropdown_list').find('div.drop span').toggleClass('chevron-down').toggleClass('chevron-up');
		$(this).parent('div.dropdown_list').find('ul.droplist').slideToggle();
		$(this).toggleClass('active');
	});
	$('#blk-2 div.drop').click(function () {
		$('#blk-2 div.drop.active').not(this).find('span').removeClass('chevron-down').addClass('chevron-up');
		$('#blk-2 div.drop.active').not(this).removeClass('active').parent('div.dropdown_list').find('ul.droplist').slideUp();
		$(this).parent('div.dropdown_list').find('div.drop span').toggleClass('chevron-down').toggleClass('chevron-up');
		$(this).parent('div.dropdown_list').find('ul.droplist').slideToggle();
		$(this).toggleClass('active');
	});
	$('#offline div.drop').click(function () {
		$('#blk-1 div.drop.active').not(this).find('span').removeClass('chevron-down').addClass('chevron-up');
		$('#blk-1 div.drop.active').not(this).removeClass('active').parent('div.dropdown_list').find('ul.droplist').slideUp();
		$(this).parent('div.dropdown_list').find('div.drop span').toggleClass('chevron-down').toggleClass('chevron-up');
		$(this).parent('div.dropdown_list').find('ul.droplist').slideToggle();
		$(this).toggleClass('active');
	});
});
$(function () {
	$("[name=toggler]").click(function () {
		$('.toHide').hide();
		$("#blk-" + $(this).val()).show('slow');
	});
});
// slick functions
$(document).ready(function () {
	// load more button functions
	$(document).ready(function () {
		$(".contents1").slice(0, 9).show();
		$("#loadMore").on("click", function (e) {
			e.preventDefault();
			$(".contents1:hidden").slice(0, 3).slideDown();
			if ($(".contents1:hidden").length == 0) {
				$("#loadMore").text("Content End").addClass("noContent");
			}
		});

	});

});

// modal script

