$(document).ready(function () {
    var offset = 0;

    $(function () {
        $('.title').animate({
            'opacity': '1'
        }, 1500);
        $('.portfolio-box').each(function(i){
            offset += 500;
            $(this).animate({
                'opacity': '1',
                'bottom':'0%'
            }, 1500 + offset);
        });
    });
    $(window).scroll(function () {
        $('.container').each(function (i) {
            var bottom_object = $(this).position().top + $(this).outerHeight()/2;
            var bottom_window = $(window).scrollTop() + $(window).height();
            if ($(this), bottom_window > bottom_object) {
                $(this).animate({
                    'opacity': '1'
                }, 1500);
            } 
        });
    });
});