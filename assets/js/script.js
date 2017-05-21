new WOW().init();
$(document).ready(function(){
 $('.brand-logo').hide();
 $('.button-collapse').sideNav({closeOnClick: true});
 $('.parallax').parallax();
 $('.scrollspy').scrollSpy({scrollOffset:90});
 $('.slogan').typeIt({
  strings: ["<h4>We are the FIRST IT Security in BALI...</h4>", "<h4>Let's Make Your System More Secure With Us...</h4>"],
  speed: 100,
  breakLines: false,
  autoStart: true,
  loop: true,
  loopDelay: 1000,     
  html: true
 });
});

