$(function () {


    //menu slide

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




    //main slide

    //초기 설정
    $('#main_wrap>.slide:last').insertBefore($('#main_wrap>.slide:first'));
    $('#main_wrap').css('marginLeft', '-100%');

    //슬라이드 함수
    function goSlide(c) {
        //매개변수 c : 호출구분 (0-인터발호출, 1-오른쪽 버튼 호출)

        //console.log('슬라이드 실행~~~');

        $('#main_wrap').animate({
            marginLeft: '-200%'
        }, 1000, function () {
            $('#main_wrap>.slide:first').insertAfter($('#main_wrap>.slide:last'));
            $('#main_wrap').css('marginLeft', '-100%');
        });

        //클릭했을 때 자동실행 멈추기
        if (c === 1) clearAutoSide();
        /*if(c===1) {
            clearInterval(intcall_side);
            
            setTimeout(function(){
                autoCallSide();
            }, 3000);
        }*/
    }

    /*function autoS() {
        setInterval(goSlide, 3000)
    }
    autoS();*/


    var intcall_side;
    var autoCallSide = function () {
        intcall_side = setInterval(function () {
            goSlide(0);
        }, 3000)
    };

    autoCallSide();


    var tcall_side;
    var clearAutoSide = function () {

        clearInterval(intcall_side);

        clearTimeout(tcall_side);

        tcall_side = setTimeout(function () {
            autoCallSide();
        }, 3000);
    };




    $('.btn').click(function () {

        var idx = $(this).index('.btn');
        console.log(idx);
        //0-왼쪽, 1-오른쪽

        if (idx) {
            //idx:1이 되었을 때, true 
            goSlide(1);
        } else {
            //idx:0이 되었을 때, false

            $('#main_wrap').animate({
                marginLeft: 0
            }, 1000, function () {
                $('#main_wrap').prepend($('#main_wrap>.slide:last')).css({
                    marginLeft: '-100%'
                });

            }); //animate

            clearAutoSide();

        } //if else문

    }); //click

    // 이동버튼 클릭시 이동
    /*$('#arrowL').click(function () {
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



    });*/



    //    $('#bn_arrowR').click(function(){
    //        
    //        $('.container').animate({
    //            marginLeft: '-=300px'
    //        }, 300);
    //        
    //    });
    //    
    //    $('#bn_arrowL').click(function(){
    //        
    //        $('.container').animate({
    //            marginLeft: '+=300px'
    //        }, 300);
    //        
    //    });


    var width = 1184;
    var count = $('.slider .bn_box').length;


    // 슬라이드 구현하기
    var currentPage = 0;
    var changePage = function () {
        $('.container').animate({
            marginLeft: -(currentPage * width) / 4
        });
    };

    //이전버튼 클릭
    $('#bn_arrowL').click(function () {
        if (currentPage > 0) {
            currentPage = currentPage - 1;
            changePage();
        }
    });

    //다음버튼 클릭
    $('#bn_arrowR').click(function () {
        if (currentPage < count - 4) {
            currentPage = currentPage + 1;
            changePage();
        }
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
    
    
    $('.showMore').mouseenter(function(){
        $(this).animate({
            paddingLeft: '20px'
        }, 300);
    });
    $('.showMore').mouseleave(function(){
        $(this).animate({
            paddingLeft: 0
        }, 300);
    });
    
    
    
    
    // event&magazine 박스 초기 설정
    $('.box1').css({
        top: '-50px',
        opacity: 0
    });
    $('.box2').css({
        top: '150px',
        opacity: 0
    });




}); //jQuery


// 스크롤 이벤트
$(window).scroll(function () {
    var scTop = $(this).scrollTop();
    console.log(scTop);

    //var conOffset = $('#roastery').offset().top - 500;
    var conOffset = $('#roastery').offset().top - 600; //1784.375
    console.log("roastery offset: " + conOffset);

    // 1-1. ROASTERY 스크롤
    if (scTop > conOffset) {

        //box1
        $('.test1 img').animate({
            left: 0
        }, 600);
        $('.test1 .roas_txt').animate({
            top: '20%',
            opacity: 1
        }, 600);

        //box2 
        $('.roas_conR img').delay(800).animate({
            right: 0
        }, 600);
        $('.test2 .roas_txt').delay(800).animate({
            top: '20%',
            opacity: 1
        }, 600);


        //box3
        $('.test3 img').delay(1600).animate({
            left: 0
        }, 600);
        $('.test3 .roas_txt').delay(1600).animate({
            top: '20%',
            opacity: 1
        }, 600);
    }


    // 1. ROASTERY 스크롤
    /*if (scTop > conOffset) {

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
    };*/

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
    }


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
