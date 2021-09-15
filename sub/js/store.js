$(function () {

    //초기설정
    $('#container>div').hide();
    $('#store1').show();



    //store메뉴 클릭시 내용 변경
    $('.stM').click(function () {
        $(this).addClass('selM').siblings().removeClass('selM');

        var idx = $(this).index('.t_menu>li');
        console.log(idx);

        var stN = idx + 1;
        console.log(stN);

        $('#container>div').hide();
        $('#store' + stN).fadeIn();

    });


    //이미지 슬라이드

    function slider() {

        //store1
        $('#store1>.slide>.slide_wrap').delay(1000).animate({
            marginLeft: '-880px'
        }, 1000, function () {
            $(this).append($('#store1>.slide>.slide_wrap>img:first')).css({
                marginLeft: '0'
            });
        });
        
        
        //store2
        $('#store2>.slide>.slide_wrap').delay(1000).animate({
            marginLeft: '-880px'
        }, 1000, function () {
            $(this).append($('#store2>.slide>.slide_wrap>img:first')).css({
                marginLeft: '0'
            });
        });
        
        
        //store3
        $('#store3>.slide>.slide_wrap').delay(1000).animate({
            marginLeft: '-880px'
        }, 1000, function () {
            $(this).append($('#store3>.slide>.slide_wrap>img:first')).css({
                marginLeft: '0'
            });
        });
        
        
        //store4
        $('#store4>.slide>.slide_wrap').delay(1000).animate({
            marginLeft: '-880px'
        }, 1000, function () {
            $(this).append($('#store4>.slide>.slide_wrap>img:first')).css({
                marginLeft: '0'
            });
        });
        
        
        //store5
        $('#store5>.slide>.slide_wrap').delay(1000).animate({
            marginLeft: '-880px'
        }, 1000, function () {
            $(this).append($('#store5>.slide>.slide_wrap>img:first')).css({
                marginLeft: '0'
            });
        });
        
        
        //store6
        $('#store6>.slide>.slide_wrap').delay(1000).animate({
            marginLeft: '-880px'
        }, 1000, function () {
            $(this).append($('#store6>.slide>.slide_wrap>img:first')).css({
                marginLeft: '0'
            });
        });

    }

    /*$('li:first')*/

    function go() {
        setInterval(function () {
            slider();
        }, 1000);
    }
    go();


});
