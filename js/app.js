$(document).ready(function(){
  
  $(window).scroll( function() {
    var windowTop = $(window).scrollTop();
    $('#landing-image').css('background-position', '0px ' + (-windowTop/6) + 'px');
    console.log(windowTop);
  });
})