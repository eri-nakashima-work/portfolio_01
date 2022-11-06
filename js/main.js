(function($){

$(function() {
		$("#header-fnav").hide();
	$("#header-fnav-area").hover(function(){
		$("#header-fnav").fadeIn('fast');
	}, function(){
		$("#header-fnav").fadeOut('fast');
	});
});


// グローバルナビ-サブメニュー
$(function(){
	$(".sub-menu").css('display', 'none');
	$("#gnav-ul li").hover(function(){
		$(this).children('ul').fadeIn('fast');
	}, function(){
		$(this).children('ul').fadeOut('fast');
	});
});

// トップページメインビジュアル
$(function(){
	h = $(window).height();
	hp = h * .3;
	$('#main_visual').css('height', h + 'px');
	$('#main_visual .wrap').css('padding-top', hp + 'px');
});

$(function(){
	if(window.innerWidth < 768) {
	h = $(window).height();
	hp = h * .2;
	$('#main_visual').css('height', h + 'px');
	$('#main_visual .wrap').css('padding-top', hp + 'px');
	}
});

// sp-nav
$(function(){
	var header_h = $('#global_header').height();
	$('#gnav-sp').hide();

		$(window).resize(function(){
			var w = $(window).width();
			var x = 991;
			if (w >= x) {
					$('#gnav-sp').hide();
			}
	});

	$('#gnav-sp').css('top', header_h);
	$('#header-nav-btn a').click(function(){
		$('#gnav-sp').slideToggle();
		$('body').append('<p class="dummy"></p>');
	});
	$('body').on('click touchend', '.dummy', function() {
		$('#gnav-sp').slideUp();
		$('p.dummy').remove();
		return false;
	});
});

})(jQuery);


// パーティクル
var particles = Particles.init({
	selector: '.background',
	sizeVariations: 10,
	color: ['#caeaf8', '#e4f4fb', '#f8fdfe'],
	connectParticles: true
});