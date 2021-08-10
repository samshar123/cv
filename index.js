//Get the button:
arrow1 = document.getElementById("icon-arrow");

window.onscroll = function() {scroleFunction()};

function scroleFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    arrow1.style.opacity="1";
  } else {
    arrow1.style.opacity="0";
  }
};




var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});





$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop()>200);
});


$(window).scroll(function(){
  $('.nav-link').toggleClass('nav-bink', $(this).scrollTop()>200);
});



var loader=document.getElementById("preloader");

window.addEventListener("load",function(){
  loader.style.display = "none";
});
