$(function () {


    //초기 설정
    $('#event>ul>li').slice(0, 4).show();

    $('.btn').on('click', function (e) {

        e.preventDefault();

        $('#event>ul>li:hidden').slice(0, 2).fadeIn();

        $('html,body').animate({
            scrollTop: $('#event>ul>li:last').offset().top - 140
        }, 500);

        if ($('#event>ul>li:hidden').length == 0) {
            $('.btn').text('TOP').css({
                width: '60px',
                borderRadius: '50%'
            });
            $('.btn').click(function () {
                $('html,body').stop().animate({
                    scrollTop: $('#event>ul').offset().top - 50
                }, 500);
            });
        }





    });


});
