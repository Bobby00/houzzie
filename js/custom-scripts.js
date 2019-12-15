$(document).ready(function(){

  $('input').focus(function(){
    $(this).parent().find(".label-txt").addClass('label-active');
  });

  $("input").focusout(function(){
    if ($(this).val() == '') {
      $(this).parent().find(".label-txt").removeClass('label-active');
    };
  });

});

document.getElementById("bck_sml_btn").style.display = "none";
document.getElementById("sign_in_1").style.display = "none";

document.getElementById("choose_home_owner").onclick = function() { 
    document.getElementById("sign_in_1").style.display = "block";
    document.getElementById("bck_sml_btn").style.display = "block";
} 

document.getElementById("bck_sml_btn").onclick = function() { 
    document.getElementById("sign_in_1").style.display = "none";
    document.getElementById("bck_sml_btn").style.display = "none";
}