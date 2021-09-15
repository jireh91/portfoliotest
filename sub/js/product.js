$(function(){
    
    //product초기설정
    $('.prod_all').addClass('active');
    
    
    
    //click
    $('.top_menu>.c-all').click(function(){
        $('.prod_all').addClass('active').siblings().removeClass('active');
        
    });
    
    $('.top_menu>.c-cof').click(function(){
        $('.prod_coffee').addClass('active').siblings().removeClass('active');
        
    });
    
    $('.top_menu>.c-cold').click(function(){
        $('.prod_coldbrew').addClass('active').siblings().removeClass('active');
        
    });
    
    $('.top_menu>.c-drip').click(function(){
        $('.prod_dripbag').addClass('active').siblings().removeClass('active');
        
    });
    
    $('.top_menu>.c-tool').click(function(){
        $('.prod_tool').addClass('active').siblings().removeClass('active');
        
    });
    
});