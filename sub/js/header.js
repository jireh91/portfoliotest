$(function(){
    
    $('.gnb-bar').hide();
    $('.main_menu>li').mouseenter(function () {

        var barpos = $(this).position().left;
        $('.gnb-bar').show().animate({
            left: barpos
        }, 100);

        var sub = $(this).find('.sub_menu').length;
        //서브메뉴가 없으면 0, 있으면 1
        console.log(sub);

        if (sub) {
            //서브메뉴가 있으면 실행!

            $('.inner-header').addClass('on');

            $(this).find(".sub_menu").show();
            $('.inner-header').stop().animate({
                height: "160px"
            }, 600);

        } else {
            $('.sub_menu').hide();
        }

    });

    $('nav').mouseleave(function () {
        $('.gnb-bar').hide();

        $('.sub_menu').stop().hide();
        $('.inner-header').stop().animate({
            height: "100px"
        }, 500, function () {
            $(this).removeClass('on');
        });
    });
    
});