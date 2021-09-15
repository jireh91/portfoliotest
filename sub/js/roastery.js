$(function(){
    $('.roas_menu').hide();
});

$(window).scroll(function () {

     var scTop = $(this).scrollTop();
     console.log(scTop);

     var rMpos = $(this).height() * 0.1;
     console.log("rMpos: "+ rMpos);
     
     var lMP = scTop + rMpos - 500;



     var roasMOffset = $('.sub_title1').offset().top - 400;
     console.log("roasMOffset: " + roasMOffset);

     var rosOffset1 = $('.sub_title1').offset().top - 700;
     var rosOffset2 = $('.sub_title2').offset().top - 700;
     console.log("roastery1 offset: " + rosOffset1);
     console.log("roastery2 offset: " + rosOffset2);
     var rosOffsetB = $('.p7').offset().top-200;
     console.log("rosOffsetB: " + rosOffsetB);
     
     // 1. roas_menu (좌측메뉴) 스크롤
     
     if (scTop < roasMOffset) {

         $('.roas_menu').fadeOut();
         
     } else if (scTop > roasMOffset && scTop <= rosOffsetB) {
         $('.roas_menu').fadeIn().css({
             top: lMP + 'px'
         });
     } else if (scTop > rosOffsetB) {
         $('.roas_menu').css({
             top: (rosOffsetB + rMpos -500) + 'px'
         });
     }
     
     


     // 2. ROASTERY 스크롤
     if (scTop > rosOffset1) {

         $('.roas_content>.sub_title1>h2').animate({
             top: '-150px',
             opacity: 1
         }, 600);

     }

     if (scTop > rosOffset2) {

         $('.roas_content>.sub_title2>h2').animate({
             top: '-95px',
             opacity: 1
         }, 600);

     }






 });

 $(function () {
     

     $('.roas_menu a').click(function (e) {

         e.preventDefault();

         var pid = $(this).attr('href');
         console.log(pid);
         var pagepos = $('.' + pid).offset().top - 230;
         console.log(pagepos);

         //스크롤 애니메이션
         $('html,body').animate({
             scrollTop: pagepos + 'px'
         }, 800, 'easeInOutQuint');
     });

 });


 /*
          //box3
          $('.test3 img').delay(1600).animate({
              left: 0
          }, 600);
          $('.test3 .roas_txt').delay(1600).animate({
              top: '20%',
              opacity: 1
          }, 600);*/



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
 /*var enmOffset = $('#evt_magz').offset().top - 100;
 console.log(enmOffset);

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
     $('.box1').stop().css({
         top: '-100px',
         opacity: 0
     });
     $('.box2').stop().css({
         top: '200px',
         opacity: 0
     });
 };*/


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
