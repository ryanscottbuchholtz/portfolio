var landingImageTop = 0;
var journeyDivTop = 0;
var workDivTop = 0;
var photoDivTop = 0;

$(document).ready(function(){

  hideSocialMedia();

  scrollTop('#work-link', 75, 1600);
  scrollTop('#photo-link', 75, 1600);
  scrollTop('#about-me-link', 0, 1600);

  $('#contact-link').on('click', function(event) {
    event.preventDefault();
    $("body, html").animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1200);
    $('#social-media-background').show();
    $('#social-media').show().addClass('animated').addClass('zoomIn');
  });

  $('.social-media-icon').on('mouseenter', function() {
    $(this).addClass('animated').addClass('rubberBand')
  }).on('mouseleave', function() {
    $(this).removeClass('animated').removeClass('rubberBand');
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

    if((windowTop + 75) > photoDivTop + $('#photo-div').height()) {
      $('.fa-chevron-down').fadeOut('slow');
      $('#image-text').fadeOut('slow');
      $('#image-text-background').fadeOut('slow');
      $('.fa-chevron-up').fadeIn('slow');
      $('#about-me').fadeIn('slow');

    } else {
      $('.fa-chevron-down').fadeIn('slow');
      $('#image-text').fadeIn('slow');
      $('#image-text-background').fadeIn('slow');
      $('.fa-chevron-up').fadeOut('slow');
      $('#about-me').fadeOut('slow');
    }
  });
})

function scrollTop(linkID, topMargin, milliseconds) {
  $(linkID).on('click', function(event) {
    event.preventDefault();

    $("body, html").animate({
      scrollTop: $($(this).attr('href')).offset().top - topMargin
    }, milliseconds);
    hideSocialMedia();
  });

}

function hideSocialMedia() {
  $('#social-media').hide();
  $('#social-media-background').hide();
}



