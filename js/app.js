var landingImageTop = 0;
var journeyDiv = 0;


$(document).ready(function(){
  landingImageTop = parseInt($('#landing-image').css('top'));
  journeyDiv = $('#journey').offset().top; 
  
  $(window).scroll( function() {
    var windowTop = $(window).scrollTop();
    var scrollTop = landingImageTop + (windowTop/8);
    if(scrollTop < 75) {
      $('#landing-image').css('top', scrollTop + 'px');   //max of 75px
    } else {
      $('#landing-image').css('top', 75 + 'px');
    };

    var topPosition = (journeyDiv - windowTop - 75);
    var bottomPosition = (journeyDiv - windowTop - 75 - $('#paths').height());

    if(topPosition < 0 ) {
      $('#journey').css({
        opacity: ($('#paths').height() - (75 - (journeyDiv - windowTop)))/$('#paths').height()
      });
    }

    console.log(scrollTop + ' ' + windowTop);
  });
})