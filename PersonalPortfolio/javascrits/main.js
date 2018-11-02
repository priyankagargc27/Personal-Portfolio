console.log('main.js loaded');

//navbar fades on scroll
 $(document).ready(function() {

  $(window).scroll(function () {
    if ($(window).scrollTop() > 280) {
      $('#nav').removeClass('navbar-trans').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('#nav').removeClass('navbar-fixed').addClass('navbar-trans');
    }
  });
});