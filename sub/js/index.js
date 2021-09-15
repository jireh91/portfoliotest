$(function () {

    //menu slide
    /*$('.main_menu>li').mouseenter(function () {
        $(this).children('ul.sub_menu').stop().slideDown();
    });

    $('.main_menu>li').mouseleave(function () {
        $(this).children('ul.sub_menu').stop().slideUp();
    });*/

    //menu slide2 
    
    $('.gnb-bar').hide();
    $('.main_menu>li').mouseenter(function () {
        
        var barpos = $(this).position().left;
        $('.gnb-bar').show().animate({
            left:barpos
        },100);

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

        }else{
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




    //main slide

    //초기 설정
    $('#main_wrap>.slide:last').insertBefore($('#main_wrap>.slide:first'));
    $('#main_wrap').css('marginLeft', '-100%');

    //슬라이드 함수
    function goSlide() {

        $('#main_wrap').animate({
            marginLeft: '-200%'
        }, 1000, function () {
            $('#main_wrap>.slide:first').insertAfter($('#main_wrap>.slide:last'));
            $('#main_wrap').css('marginLeft', '-100%');
        });
    }

    /*function autoS() {
        setInterval(goSlide, 3000)
    }
    autoS();*/


    var intcall_side;
    var autoCallSide = function () {
        intcall_side = setInterval(function () {

            goSlide();
        }, 2000)
    };

    autoCallSide();


    var tcall_side;
    var clearAutoSide = function () {

        clearInterval(intcall_side);

        clearTimeout(tcall_side);

        tcall_side = setTimeout(function () {
            autoCallSide();
        }, 2000);
    };





    // 이동버튼 클릭시 이동
    $('#arrowL').click(function () {
        $('#main_wrap').animate({
            marginLeft: 0
        }, 600, function () {
            $('#main_wrap').prepend($('#main_wrap>.slide:last')).css({
                marginLeft: '-100%'
            });

            clearAutoSide();
        });

    });
    $('#arrowR').click(function () {



    });



    //컨텐츠 호버
    // 1. best&new
    $('.bn_box').mouseenter(function () {
        $(this).find('h3').css({
            backgroundColor: '#efefef',
            color: '#2a2a2a'
        });
        $('.bn_box').mouseleave(function () {
            $(this).find('h3').css({
                backgroundColor: '#2a2a2a',
                color: '#efefef'
            });
        });
    });


    // 2. event&magazine
    $('.em_box').mouseenter(function () {
        $(this).find('.cover').show();
    });

    $('.em_box').mouseleave(function () {
        $(this).find('.cover').hide();
    });







    // 스크롤 이벤트
    $(window).scroll(function () {
        var scTop = $(this).scrollTop();
        console.log(scTop);

        var conOffset = $('#roastery').offset().top - 500;
        console.log("roastery offset: " + conOffset);

        // 1. ROASTERY 스크롤
        if (scTop > conOffset) {

            $('.roas_con>img').animate({
                left: 0,
                opacity: 1
            }, 600);
            $('.roas_txt').animate({
                top: '50%',
                opacity: 1
            }, 600);

        } else {

            $('.roas_con>img').animate({
                left: '-20%',
                opacity: 0
            });
            $('.roas_txt').animate({
                top: '70%',
                opacity: 0
            }, 600);
        };

        // 2. event&magazine 스크롤
        var enmOffset = $('#evt_magz').offset().top - 100;
        /*console.log(enmOffset);*/

        if (scTop > enmOffset) {
            $('.box1').stop().animate({
                top: 0,
                opacity: 1
            }, 600);
            $('.box2').stop().animate({
                top: '100px',
                opacity: 1
            }, 600);
        } else {
            $('.box1').css({
                top: '-100px',
                opacity: 0
            });
            $('.box2').css({
                top: '200px',
                opacity: 0
            });
        };


        //메뉴 스크롤
        /*var menuOffset = $('main').offset().top;
        if (scTop > menuOffset) {
            $('header').css({
                opacity: 0.7
            });
        } else {
            $('header').css({
                opacity: 1
            });
        };*/

    });
});