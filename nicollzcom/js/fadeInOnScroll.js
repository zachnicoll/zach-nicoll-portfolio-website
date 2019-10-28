$(document).ready(function(){
    $(function(){
        $('.title').animate({'opacity':'1'}, 1500);
    });
    $(window).scroll( function(){
        $('.container').each( function(i){
            var bottom_object = $(this).position().top + $(this).outerHeight()/2;
            var bottom_window = $(window).scrollTop() + $(window).height();

            if(bottom_window > bottom_object){
                $(this).animate({'opacity':'1'},1500);
            }
        });
    });
});