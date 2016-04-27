var landingImageTop = 0;
var journeyDivTop = 0;
var workDivTop = 0;
var photoDivTop


$(document).ready(function(){
  landingImageTop = parseInt($('#landing-image').css('top'));
  journeyDivTop = $('#journey').offset().top;
  workDivTop = $('#work').offset().top; 
  photoDivTop = $('#photo-div').offset().top;
  
  $(window).scroll( function() {
    var windowTop = $(window).scrollTop();
    var scrollTop = landingImageTop + (windowTop/8);
    if(scrollTop < 75) {
      $('#landing-image').css('top', scrollTop + 'px');   //max of 75px
    } else {
      $('#landing-image').css('top', 75 + 'px');
    };

    var journeyDivComparedToTopOfScreen = (journeyDivTop - windowTop);
    var workDivComparedToTopOfScreen = (workDivTop - windowTop);
    var photoDivComparedToTopOfScreen = (photoDivTop - windowTop);

    if(journeyDivComparedToTopOfScreen < 0 ) {
      $('#journey').css({
        opacity: ($('#journey').height() + (journeyDivTop - windowTop))/$('#journey').height()
      });
    } else {
      $('#journey').css('opacity', 1);
    };

    if(workDivComparedToTopOfScreen < $('#journey').height()) {
      $('#work').css({
        opacity: $('#work').height()/($('#work').height() - (75 - (workDivTop - windowTop)))
      });
    }

    if(photoDivComparedToTopOfScreen < $('#photo-div').height()) {
      $('#photo-div').css({
        opacity: $('#photo-div').height()/($('#photo-div').height() - (75 - (photoDivTop - windowTop)))
      });
    }

    // if(workDivComparedToTopOfScreen < 0 ) {
    //   $('#work').css({
    //     opacity: ($('#work').height() + (workDivTop - windowTop))/$('#work').height()
    //   });
    // } 

  });
    

})