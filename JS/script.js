$(function(){

  $('.nav-button').on('click',function(){
$(this).toggleClass('active');
$('.header-nav').toggleClass('active');

});

  $('.slider').slick({
    autoplay:true,
    arrows:true,
    dots:true,
    speed:1500,
    easing:'swing',
    centerMode:true,
    centerPadding:'5%',
    infinite:true,
      autoplaySpeed:1800,
      slidesToShow:3,
slidesToScroll:1,
prevArrow:'<div class="slide-btn prev-btn"></div>',
nextArrow:'<div class="slide-btn next-btn"></div>',

responsive:[{
  breakpoint:768,
  settings:{
    centerPadding:'0%',
    slidesToShow:1,
    slideToScroll:1,
  }
}
]
  });
});

$(function(){

  $('.mainvisual').bgSwitcher({
   images:['image/austin-neill-n4FwReqOQz0-unsplash.jpg','image/publicdomainq-0010456gqw.jpg','image/publicdomainq-0011441cmr.jpg','image/gahag-0055313342-1.jpg'],
   interval:3000,
});

});


$(function(){
  $('.click1').on('click',function(){
    $('.naiyou').slideDown();
    $('.click1,.click2,.click3').fadeOut();
    $('#title').fadeOut();
    
  $('.naiyou').on('click',function(){
    $('.naiyou').slideUp();
        $('.click1,.click2,.click3').fadeIn();
          $('#title').fadeIn();
  });
  });
});



$(function(){
  $('.click2').on('click',function(){
    $('.sns').slideDown();
    $('.click1,.click2,.click3').fadeOut();
    $('#title').fadeOut();

  $('.sns').on('click',function(){
    $('.sns').slideUp();
        $('.click1,.click2,.click3').fadeIn();
          $('#title').fadeIn();
  });
  });
});

$(function() {
    var $allMsg = $('#title');
    var $wordList = $('#title').html().split("");
    $('#title').html("");
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay(idx * 70);
        newEL.animate({ opacity: 1 }, 3000);
    });
});


$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 300){
              $(this).addClass('active');
            }
        });
    });
});
