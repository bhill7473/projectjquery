$(document).ready(function(){
//header effects
   $('#meimg').hide();
   $('.disbtn').hide();
   $(".header").fadeIn(5000);
   $(".aboutTitle").fadeIn(5000);
  $('.header').on('mouseenter', function(){
     $('.header').css({
      fontSize:'40px',
      color:'#00ff00'
      });
  });

  $('.header').on('mouseleave', function(e){
     $(e.currentTarget).css({
           fontSize: '30px',
           color: '#33cc33'
         });
    });
//about Section effects

  $('.aboutTitle').on('mouseenter', function(){
    $('.aboutSection').css({visibility: 'visible'}).animate({
      fontSize:'22px'

    },5000);
    $('.aboutTitle').animate({
      fontSize:'40px'

    },2000).css({
     fontSize:'40px',
     color:'#00ff00'
   });
   $('.me').css({visibility: 'visible'});
  });

 $('.photobtn').on('click', function(){

   $('#meimg').fadeIn(5000);
   $('.disbtn').show();
 });

 $('.disbtn').on('click', function(){
   $('#meimg').fadeOut(2000);
 });

 $('.github').click(function(){
  window.location = 'https://github.com/bhill7473';
});
$('.linkedin').click(function(){
  window.location = 'https://www.linkedin.com/in/brent-hillen/';
});
$('.gmail').click(function(){
  window.location = 'mailto:bhill7473@gmail.com';
});

});
