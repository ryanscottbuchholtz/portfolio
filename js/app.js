var landingImageTop = 0;
var journeyDivTop = 0;
var workDivTop = 0;
var photoDivTop = 0;
var aboutDivTop = 0; 

$(document).ready(function(){

  scrollTop('#study-link', 75, 1600);
  scrollTop('#work-link', 75, 1600);
  scrollTop('#photo-link', 75, 1600);
  scrollTop('#about-me-link', 0, 1600);

  $('.social-media-icon').on('mouseenter', function() {
    $(this).addClass('animated').addClass('rubberBand')
  }).on('mouseleave', function() {
    $(this).removeClass('animated').removeClass('rubberBand');
  });

  $('.work-link-icon').hover(function() {
    $(this).addClass('animated').addClass('tada')
  }, function() {
    $(this).removeClass('animated').removeClass('tada')
  });

  $('#home-link').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 2400);
  });

  landingImageTop = parseInt($('#landing-image').css('top'));
  journeyDivTop = $('#journey').offset().top;
  workDivTop = $('#work').offset().top; 
  photoDivTop = $('#photo-div').offset().top;
  aboutDivTop = $('#about').offset().top;

  if($(window).width() < 626) {
    $(window).scroll( function() {
      var windowTop = $(window).scrollTop();

      if(windowTop >= (journeyDivTop - 75)) {
        console.log('time to fade');
        $('.header-wrap').fadeOut('slow');
        $('#social-media-float').fadeIn('slow');
      } else {
        $('#social-media-float').fadeOut('slow');
        $('.header-wrap').fadeIn('slow');
      }
    });
  } else {
  
    $(window).scroll( function() {
      var windowTop = $(window).scrollTop();
      var scrollTop = landingImageTop + (windowTop/8);
      var journeyDivComparedToTopOfScreen = (journeyDivTop - windowTop);
      var workDivComparedToTopOfScreen = (workDivTop - windowTop);
      var photoDivComparedToTopOfScreen = (photoDivTop - windowTop);
      var aboutDivComparedToTopOfScreen = (aboutDivTop - windowTop);
      
      if(scrollTop < 75) {
        $('#landing-image').css('top', scrollTop + 'px');   //max of 75px
      } else {
        $('#landing-image').css('top', 75 + 'px');
      };

      if(windowTop >= (journeyDivTop - 75)) {
        $('#social-media-float').fadeIn('slow');
        $('#social-media-float').css('top', windowTop + 150);
      } else {
        $('#social-media-float').fadeOut('slow')
      };

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

      if((windowTop + 75) > photoDivTop + $('#photo-div').height()) {
        $('.fa-chevron-down').fadeOut('slow');
        $('#image-text').fadeOut('slow');
        $('#image-text-background').fadeOut('slow');
        $('.fa-chevron-up').fadeIn('slow');
        $('#photo-and-bio').fadeIn('slow');
        $('#photo-ryan').addClass('animated').removeClass('fadeOutRightBig').addClass('fadeInLeftBig');
        $('#bio').addClass('animated').removeClass('fadeOutLeftBig').addClass('fadeInRightBig');


      } else {
        $('.fa-chevron-down').fadeIn('slow');
        $('#image-text').fadeIn('slow');
        $('#image-text-background').fadeIn('slow');
        $('.fa-chevron-up').fadeOut('slow');
        $('#photo-and-bio').fadeOut('slow');
        $("about").fadeOut('slow');
        $('#photo-ryan').removeClass('fadeInLeftBig').addClass('fadeOutRightBig');
        $('#bio').removeClass('fadeInRightBig').addClass('fadeOutLeftBig');
      }
    });
  }
})

function scrollTop(linkID, topMargin, milliseconds) {
  $(linkID).on('click', function(event) {
    event.preventDefault();

    $("body, html").animate({
      scrollTop: $($(this).attr('href')).offset().top - topMargin
    }, milliseconds);
  });
}



