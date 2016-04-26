var landingImageTop = 0;
var journeyDiv = 0;


$(document).ready(function(){
  landingImageTop = parseInt($('#landing-image').css('top'));
  bioPicLeft = parseInt($('#photo-ryan').css('left'));
  journeyDiv = $('#work').offset().top; 
  
  $(window).scroll( function() {
    var windowTop = $(window).scrollTop();
    var scrollTop = landingImageTop + (windowTop/8);
    $('#landing-image').css('top', scrollTop + 'px');

    var topPosition = (journeyDiv - windowTop - 75);
    var bottomPosition = (journeyDiv - windowTop - 75 - $('#paths').height());

    if(topPosition < 0 ) {
      $('#paths').css({
        opacity: ($('#paths').height() - (75 - (journeyDiv - windowTop)))/$('#paths').height()
      });
    }

    console.log((journeyDiv - windowTop) + ' ' + $('#paths').height() + ' ' + (75 - (journeyDiv - windowTop)) + ' ' + ($('#paths').height() - (75 - (journeyDiv - windowTop))) + ' ' + ($('#paths').height() - (75 - (journeyDiv - windowTop))/$('#paths').height()));

  });
})