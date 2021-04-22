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
	// send enquiry
	$(function () {
		$(".enquiry_modal").click(function (e) {
			e.preventDefault();
			$('.modal').show('slow');
		});
	});
	$(function () {
		$(".closebtn").click(function () {
			$('.modal').hide('slow');
		});
	});
	// password show button
	$(function () {
		$("#passwordshow").click(function () {
			var passwordtype = $('#loginpassword').attr("type");
			if (passwordtype == 'password') {
				$(this).text("HIDE");
				$('#loginpassword').attr("type", "text");
			} else {
				$(this).text("SHOW");
				$('#loginpassword').attr("type", "password");
			}
			
		});
	});
	// password show button in partners page
	$(function () {
		$(".eye-slash").click(function () {
			$('.password').attr("type", "text");
			$('.eye-slash').hide();
			$('.eye-open').show();
		});
	});
	$(function () {
		$("#hide1").click(function () {
			$('.password').attr("type", "password");
			$('.eye-open').hide();
			$('.eye-slash').show();
		});
	});
// my order page menu
$(function () {
	$(".profile").click(function () {
		$('.toggleheading').text("My Account");
		$('.profile').addClass('active');
		$('.order').removeClass('active');
		$('.orders').hide();
		$('.account').show();
		$('.account-edit').hide();
	});
});
$(function () {
	$(".order").click(function () {
		$('.toggleheading').text("My Orders");
		$('.profile').removeClass('active');
		$('.order').addClass('active');
		$('.account').hide();
		$('.orders').show();
		$('.account-edit').hide();
	});
});
$(function () {
	$("#editbtn").click(function () {
		$('.toggleheading').text("My Account");
		$('.profile').addClass('active');
		$('.orders').removeClass('active');
		$('.orders').hide();
		$('.account-edit').show();
		$('.account').hide();
	});
});
	




	$('.slick_one').slick({
		dots: true,
		infinite: false,
		speed: 2000,
		autoplay: false,
		slidesToShow: 3,
		//   slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 981,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				}
			},
			{
				breakpoint: 795,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 360,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});


	$('.slick_video').slick({
		dots: true,
		infinite: false,
		speed: 2000,
		autoplay: false,
		slidesToShow: 1,
		//   slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	$('.slick_feature').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		slidesToShow: 2,
		//   slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,

				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});


	$('.slick_brand').slick({
		rows: 2,
		dots: true,
		infinite: false,
		speed: 500,
		autoplay: false,
		slidesToShow: 6,
		//   slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 981,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
					infinite: true,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				}
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	$('.slick-card').slick({
		dots: true,
		infinite: false,
		speed: 2000,
		autoplay: false,
		slidesToShow: 5,
		//   slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
					infinite: true,
				}
			},
			{
				breakpoint: 981,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 361,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}

		]
	});
	$('.slick-partner').slick({
		dots: true,
		infinite: false,
		speed: 2000,
		autoplay: false,
		slidesToShow: 1,
		//   slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 981,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});
	$('.button-slick-right').click(function () {
		$(".slick-partner").slick('slickNext');
	});
	$('.button-slick-left').click(function () {
		$(".slick-partner").slick('slickPrev');
	});


});

// modal script




