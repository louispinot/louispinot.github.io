$(document).ready(function(){

  $(window).resize(function(){
    if($(window).width() < 769) {
      $('.custom1 .navbar-collapse').css("border-top", "1px solid #9e8170")
    };
    if($(window).width() > 768) {
      $('.custom1 .navbar-collapse').css("border-top", "0")
    };
  });


});