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
document.getElementById("sign_up").style.display = "none";
document.getElementById("swap_mini").style.display = "none";
document.getElementById("swap_mini_2").style.display = "none";



// document.getElementById("hideBottomNav").onclick = function() { 
//     document.getElementById("bottomNav").style.display = "none";
// }


document.getElementById("choose_home_owner").onclick = function() { 
    x = document.getElementById("sign_in_1");
    x.style.display = "block";
    x.classList.add("fadeInUp");
    document.getElementById("bck_sml_btn").style.display = "block";
    document.getElementById("swap_large").style.display = "none";
    document.getElementById("swap_mini").style.display = "block";
    document.getElementById("bottomNav").style.display = "block";
    document.getElementById("swap_mini_2").style.display = "none";
    document.getElementById("hidden_on_page_activity").style.display = "none";
    document.getElementById("reduce_sze_active").style.width = "25%";
} 

document.getElementById("choose_helper").onclick = function() { 
    x = document.getElementById("sign_in_1");
    x.style.display = "block";
    x.classList.add("fadeInUp");
    document.getElementById("bck_sml_btn").style.display = "block";
    document.getElementById("swap_large").style.display = "none";
    document.getElementById("swap_mini").style.display = "none";
    document.getElementById("bottomNav").style.display = "block";
    document.getElementById("swap_mini_2").style.display = "block";
    document.getElementById("hidden_on_page_activity").style.display = "none";
    document.getElementById("reduce_sze_active").style.width = "25%";
} 

document.getElementById("bck_sml_btn").onclick = function() { 
    document.getElementById("sign_in_1").style.display = "none";
    document.getElementById("bck_sml_btn").style.display = "none";
    document.getElementById("hidden_on_page_activity").style.display = "block";
    document.getElementById("reduce_sze_active").style.width = "50%";
    document.getElementById("swap_mini").style.display = "none";
    document.getElementById("swap_mini_2").style.display = "none";
    document.getElementById("swap_large").style.display = "block";
    document.getElementById("sign_up").style.display = "none";
}

document.getElementById("sign_up_btn").onclick = function() { 
    x = document.getElementById("sign_up");
    x.style.display = "block";
    x.classList.add("fadeInUp");

    if($(x).css('display') == 'block') {
      document.getElementById("bottomNav").style.display = "none";
    }
  }

var logID = 'log',
  log = $('<div id="'+logID+'"></div>');
$('body').append(log);
  $('[type*="radio"]').change(function () {
    var me = $(this);
    log.html(me.attr('value'));
  });

