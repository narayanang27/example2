$(document).ready(function() {
    var finalHeight = 0,
        windowHeight = 0;
    var colLength = $('.row-mansory > div[class*="col-"]').length;
	var completeElements = $('.row-mansory > div[class*="col-"]');
	var zerothHeight=0, firstHeight=0, secondHeight=0;
    completeElements.each(function(index, element) {
		
        if ((index - 2) <= 0) {
            topvalue = 0;
        } else {
            topvalue = $('.row-mansory > div[class*="col-"]').eq(index - 3).height() + parseInt($('.row-mansory >  div[class*="col-"]').eq(index - 3).css('top')) + 15 + 'px';

        }
		
        if (index % 3 == 0) {
            leftValue = 0;
			zerothHeight += parseInt($(this).height())+15;
        } else {
            leftValue = $(this).prev().width() + parseInt($(this).prev().css('left')) + 30 + 'px';
        }
        finalHeight = (parseInt(finalHeight) < parseInt(topvalue)) ? parseInt(topvalue) : parseInt(finalHeight);

		if (index % 3 == 1) {
            firstHeight += parseInt($(this).height())+15;
		}
		if (index % 3 == 2) {
            secondHeight += parseInt($(this).height())+15;
		}
        $(this).css({
            left: leftValue,
            top: topvalue
        });

    });

	windowHeight = zerothHeight > firstHeight ? zerothHeight : finalHeight;
	windowHeight = windowHeight > secondHeight ? windowHeight : secondHeight;
	
    $('.row-mansory').height(windowHeight + 15);
});