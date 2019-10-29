$(document).ready(function () {
    $('.portfolio-box').find('h2').css("opacity","1");
    $('.portfolio-box').find('p').css("opacity","0");
    $('.portfolio-box').find('i').css("opacity","0");
    var bkg;
    $(".portfolio-box").hover(
        function () {
            bkg = $(this).css('background-image');
            $(this).css("background-image","none");
            $(this).find('h2').css("opacity","0");
            $(this).find('p').css("opacity","1");
            $(this).find('i').css("opacity","1");
        },
        function () {
            $(this).css("background-image", bkg);
            $(this).find('h2').css("opacity","1");
            $(this).find('p').css("opacity","0");
            $(this).find('i').css("opacity","0");
        }
    );
});