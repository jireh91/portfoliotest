$(function () {
    
    //페이지 로딩시1 - fadeIn()
    //$('.main_txt').hide();
    //$('.main_txt').fadeIn(1000);
    
    //페이지 로딩시2 
    $('.main_txt').animate({
        top: 0,
        opacity: 1
    },1000);
    

    //초기설정
    $('.ci_cover').css({
        height: '400px'
    });
    $('.ci_con').css({
        display: 'none'
    });
    $('.ce_cover').css({
        height: '400px'
    });
    $('.ce_con').css({
        display: 'none'
    });



    //cover>a 마우스호버 이벤트
    $('.ci_cover>a').mouseenter(function () {

        $(this).css({
            backgroundColor: '#efefef',
            color: '#212977'
        });
        $('.ci_cover').css({
            backgroundSize: "110%"
        });

    });
    $('.ci_cover>a').mouseleave(function () {

        $(this).css({
            backgroundColor: '#212977',
            color: '#efefef'
        });
        $('.ci_cover').css({
            backgroundSize: "100%"
        });

    });

    
    //21.09.14 추가
    $('.ci_cover, .ce_cover').hover(function(){
        $(this).css({
            backgroundSize: "110%",
            transition: "all 0.5s"
        });
    }, function(){
        $(this).css({
            backgroundSize: "100%",
            transition: "all 0.5s"
        });
    });
    $('.ce_cover>a').mouseenter(function () {

        $(this).css({
            backgroundColor: '#efefef',
            color: '#212977'
        });
        /*$('.ce_cover').css({
            backgroundSize: "110%"
        });*/

    });
    $('.ce_cover>a').mouseleave(function () {

        $(this).css({
            backgroundColor: '#212977',
            color: '#efefef'
        });
        /*$('.ce_cover').css({
            backgroundSize: "100%"
        });*/

    });



    //open버튼 click 이벤트


    $('.ci_cover>a').click(function (e) {
        e.preventDefault();

        if ($('.ci_con').css('display') === 'none') {
            $('.ci_cover').css({
                height: '300px'
            });
            $('.ci_con').slideDown();
            $('.ci_cover>a').text('CLOSE');
            $('html,body').animate({
                scrollTop: $('.ci_cover').offset().top - 100
            }, 500);
        } else {
            $('.ci_cover').css({
                height: '400px'
            });
            $('.ci_con').slideUp();
            $('.ci_cover>a').text('OPEN');
            $('html,body').animate({
                scrollTop: $('.ci_cover').offset().top - 100
            }, 500);
        }


    });
    
    $('.ce_cover>a').click(function (e) {
        e.preventDefault();

        if ($('.ce_con').css('display') === 'none') {
            $('.ce_cover').css({
                height: '300px'
            });
            $('.ce_con').slideDown();
            $('.ce_cover>a').text('CLOSE');
            $('html,body').animate({
                scrollTop: $('.ce_cover').offset().top - 100
            }, 500);
        } else {
            $('.ce_cover').css({
                height: '400px'
            });
            $('.ce_con').slideUp();
            $('.ce_cover>a').text('OPEN');
            $('html,body').animate({
                scrollTop: $('.ce_cover').offset().top - 100
            }, 500);
        }


    });



});
