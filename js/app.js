var landingImageTop = 0;

$(document).ready(function(){
  landingImageTop = parseInt($('#landing-image').css('top'));
  bioPicLeft = parseInt($('#photo-ryan').css('left'));
  
  $(window).scroll( function() {
    var windowTop = $(window).scrollTop();
    var scrollTop = landingImageTop + (windowTop/8);
    $('#landing-image').css('top', scrollTop + 'px');


  });
})