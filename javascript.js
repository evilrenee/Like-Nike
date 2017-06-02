// STICKY NAV

$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 880) {
            $('#nav_wrapper').addClass('sticky');
            $('#wrapper').addClass('padding');
            document.getElementById("nav_logo").style.visibility = "visible";
        }
        else {
            $('#nav_wrapper').removeClass('sticky');
            $('#wrapper').removeClass('padding');
            document.getElementById("nav_logo").style.visibility = "hidden";
        }
    });
});

// HEADER TRANSITION

jQuery(window).scroll(function(){
var fromTopPx = 60; // distance to trigger
var scrolledFromtop = jQuery(window).scrollTop();
if(scrolledFromtop > fromTopPx){
   jQuery('.header').addClass('transition1');
}else{
   jQuery('.header').removeClass('transition1');``
}

var fromTopPx = 90; // distance to trigger
var scrolledFromtop = jQuery(window).scrollTop();
if(scrolledFromtop > fromTopPx){
   jQuery('.header').addClass('transition2');
}else{
   jQuery('.header').removeClass('transition2');``
}

var fromTopPx = 120; // distance to trigger
var scrolledFromtop = jQuery(window).scrollTop();
if(scrolledFromtop > fromTopPx){
   jQuery('.header').addClass('transition3');
}else{
   jQuery('.header').removeClass('transition3');``
}

var fromTopPx2 = 150; // distance to trigger
var scrolledFromtop = jQuery(window).scrollTop();
if(scrolledFromtop > fromTopPx2){
   jQuery('.header').addClass('scrolled');
}else{
   jQuery('.header').removeClass('scrolled');``
}
});
