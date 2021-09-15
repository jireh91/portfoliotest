$(function () {

    //초기설정
    $('.bsimg_box>img').css({
        position: 'relative',
        top: '100px',
        opacity: '0'
    });
    $('.vwimg_box>img').css({
        position: 'relative',
        top: '100px',
        opacity: '0'
    });
    $('.yrimg_box>img').css({
        position: 'relative',
        top: '100px',
        opacity: '0'
    });
    $('.black_suit_wrap>h2, .velvet_white_wrap>h2, .yuzo_ruby_wrap>h2').css({
        position: 'relative',
        top: '60px',
        opacity: '0'
    });
    $('.bstxt_box, .vwtxt_box, .yrtxt_box').css({
        opacity: '0'
    });


    //로딩시 실행
    $('.black_suit_wrap>h2').animate({
        top: '0',
        opacity: '1'
    }, 600);
    $('.bstxt_box').delay(300).animate({
        opacity: '1'
    }, 600);
    $('.bsimg_box>img').delay(600).animate({
        top: '0',
        opacity: '1'
    }, 600);






});



$(window).scroll(function () {




    //변수 모음
    var scTop = $(this).scrollTop();
    console.log(scTop);

    var prodTop1 = $('#black_suit').offset().top;
    console.log("pro1: " + prodTop1);

    var prodTop2 = $('#velvet_white').offset().top;
    console.log("pro2: " + prodTop2);

    var prodTop3 = $('#yuzo_ruby').offset().top;
    console.log("pro3: " + prodTop3);

    var banTop = $('#banner').offset().top;


    // scroll 구현

    if (scTop > prodTop2 - 300) {
        $('.velvet_white_wrap>h2').animate({
            top: '0',
            opacity: '1'
        }, 600);
        $('.vwtxt_box').delay(300).animate({
            opacity: '1'
        }, 600);
        $('.vwimg_box>img').delay(600).animate({
            top: '0',
            opacity: '1'
        }, 600);

    }
    if (scTop > prodTop3 - 300) {
        $('.yuzo_ruby_wrap>h2').animate({
            top: '0',
            opacity: '1'
        }, 600);
        $('.yrtxt_box').delay(300).animate({
            opacity: '1'
        }, 600);
        $('.yrimg_box>img').delay(600).animate({
            top: '0',
            opacity: '1'
        }, 600);
    }

    //배너 이미지 효과
    /* if (scTop > banTop - 600) {
        $('.service, .company').animate({
            background: '#333 url(images/rostery1-2/banner2.png) no-repeat 0/cover'
        }, 500);
    } */






});