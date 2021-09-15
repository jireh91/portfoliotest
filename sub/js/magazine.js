$(function () {


    //초기 설정
    $('.col1>li').slice(0, 2).show();
    $('.col2>li').slice(0, 2).show();
    $('.col3>li').slice(0, 2).show();

    $('.btn').on('click', function (e) {
        
        e.preventDefault();

        $('.col1>li:hidden').slice(0, 1).fadeIn();
        $('.col2>li:hidden').slice(0, 1).fadeIn();
        $('.col3>li:hidden').slice(0, 1).fadeIn();
        
        
        
        $('html,body').animate({
            scrollTop: $('.contents>li:last').offset().top
        }, 500);


        if ($('.contents>li:hidden').length == 0) {
            $('.btn').text('TOP').css({
                width: '60px',
                borderRadius: '50%'
            });
            $('.btn').click(function () {
                $('html,body').stop().animate({
                    scrollTop: $('.contents>li:first').offset().top-200
                }, 500);
            });
        }

        

            
    });

});
