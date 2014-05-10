var password = {
  sigeanForm: "030251"
};

$(document).ready(function(){

  $('.project-access-portal form').submit(function(e){

    e.preventDefault();
    var key = $(this).attr("id");
    var value = $(this).find($('input')).val();

    console.log($(this).next());

    if (password[key] == value) {
      $(this).next().removeClass("disabled")
    };

  });

});