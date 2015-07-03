$(document).ready(function() {
	$('body').height($(window).height()*5);
	$('body').scrollspy({ target: '#navbar-example' });
	
	$('#navbar a, .down-next a').click(function(){
		var anchorHref = $(this).attr('href');
    	$("html, body").animate({ scrollTop: ($(''+anchorHref).offset()).top-25 }, 600);
		return false;
	});
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 100 && $(this).scrollTop() < 1100) {
      $('#aboutUs').addClass('animate');
	}
});