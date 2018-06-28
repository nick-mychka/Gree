$(function() {
	/* ........... Initialization of WOW plugin ........... */
	wow = new WOW({
		mobile: false
	});
	wow.init();

	$(".hamburger").on("click", function() {

		if($(this).hasClass("is-active")) {
				$(this).removeClass("is-active");
				$(this).parent().children("nav").children(".nav-list").slideUp(700)
		} else {
				$(".hamburger").removeClass("is-active");
				$(".nav-list").slideUp(700);
				$(this).addClass("is-active");
				$(this).parent().children("nav").children(".nav-list").slideDown(700)
		}

	});

	$(window).on("scroll resize", function() {
		
		if ($(".hamburger").hasClass("is-active")) {
			$(".hamburger").removeClass("is-active");
			$(".nav-list").slideUp(500);
		}
	});

	$(".bg-item").mouseenter(function(){

		if ($(window).width() > 991) {
			$(this).css({'width':'465px', 'height':'350px'});
			$(this).children('.img-item').fadeOut(500);
			$(this).children('.img-hover').fadeIn(700);
			$(this).children('.hidden-adv').fadeIn(700);
		}
		
	});

	$(".bg-item").mouseleave(function(){
		if ($(window).width() > 991) {
			$(this).css({'width':'231px', 'height':'218px'});
			$(this).children('.img-hover').fadeOut(500);
			$(this).children('.hidden-adv').fadeOut(500);
			$(this).children('.img-item').fadeIn(700);
		}
	});

	function windowSize(){
		if ($(window).width() > '991'){
			$('.hidden-adv').hide();
			$(".bg-item").css({'width':'231px', 'height':'218px'});
		} else 
				if ($(window).width() < '992' && $(window).width() > '767'){
					$('.hidden-adv').show();
					$(".bg-item").css({'width':'231px', 'height':'310px'});
				} 
				else
					if ($(window).width() < '768') {
						$(".bg-item").css({'width':'100%', 'height':'100px'});
					} 
	}
	$(window).resize(windowSize);


	$(".tab_item").not(":first").hide();
	$(".wrapper_tab .tab").click(function() {
		$(".wrapper_tab .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".condi-carousel").owlCarousel({
		// loop: true,
		items: 1,
		nav: true,
		smartSpeed: 700,
		dots: false,
		navText: ['<img src="img/main/arrow/arr-left.svg" alt="left">', '<img src="img/main/arrow/arr-right.svg" alt="right">'],
		autoHeight: true
	});

	$(".accordeon .acc-title").on("click", function() {
		$('.accordeon .acc-content').not($(this).next()).slideUp(500);
		$(this).next().slideToggle(600);
	});

	$("a[rel='m_PageScroll2id']").mPageScroll2id({});
	// $('#fullpage').fullpage();

});
