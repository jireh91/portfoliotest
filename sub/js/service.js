$(function () {

    //초기설정
    $('.select_wrap>.type_wrap').show();
    $('.select_wrap>.flavor_wrap').hide();
    $('.select_wrap>.many_wrap').hide();
    $('.sticker1').css({
        top: '100px',
        opacity: 0
    });
    $('.sticker2').css({
        top: '160px',
        opacity: 0
    });
    $('.sticker3').css({
        top: '220px',
        opacity: 0
    });


    $('.main_btn').click(function () {

        $('html,body').animate({
            scrollTop: $('.select_wrap>div:first').offset().top - 250
        }, 500);

    });




    $('.que>h3').click(function () {

       
        if ($(this).siblings('.answer').css('display') === 'none') {

            $(this).siblings('.answer').slideDown();

            $(this).siblings('img').attr({

                src: 'images/service/minus.png',
                alt: 'minus'

            }).css({
                marginTop: '30px'
            });

        } else {

            $(this).siblings('.answer').slideUp();

            $(this).siblings('img').attr({

                src: 'images/service/plus.png',
                alt: 'plus'

            }).css({
                marginTop: '24px'
            });
        }
    });






    $('.s_btn').click(function (e) {

        e.preventDefault();

        //버튼 디자인 변경
        $(this).addClass('selMenu')
        $(this).parent('li').siblings().children($('.s_btn')).removeClass('selMenu');


        //스크롤 내리기
        $('.select_wrap>div:hidden').slice(0, 1).slideDown();
        
        $('html,body').animate({
            scrollTop: $('.select_wrap>div').last().offset().top-200
            /* scrollTop: $('.select_wrap>div').next().offset().top-200 */
        }, 500);

    });
    
    //마지막 항목 버튼 클릭시 결제창으로 이동
    $('.s_btn3').click(function(e){
        
        e.preventDefault();
        
        $('html,body').stop().animate({
            scrollTop: $('.calculator').offset().top-200
        }, 500);
        
    });



    //결제 항목 적용 및 변경
    $('.s_btn2').click(function(e){
        
        e.preventDefault();
        
        var beanType = $(this).siblings('h3').text()
        /*console.log(beanType);*/
        
        $('.bean>p').text(beanType);
        
    });
    
    $('.s_btn3').click(function(e){
        
        e.preventDefault();
        
        var weightType = $(this).siblings('h2').text()
        /*console.log(weightType);*/
        
        var chargeType = $(this).siblings('h3').children('span').text()
        /*console.log(chargeType);*/
        
        $('.weight>p').text(weightType);
        
        $('.charge>p').text(chargeType);
        
    });


});



$(window).scroll(function () {
    
    
    var scTop = $(this).scrollTop();
    /*console.log(scTop);*/

    var whyWrap = $('.why_wrap').offset().top - 300;
    /*console.log("why_wrap: " + whyWrap);*/


    if (scTop > whyWrap) {

        $('.sticker1').animate({
            top: '0px',
            opacity: 1
        }, 600);
        $('.sticker2').delay(600).animate({
            top: '60px',
            opacity: 1
        }, 600);
        $('.sticker3').delay(1200).animate({
            top: '120px',
            opacity: 1
        }, 600);
    }

});
