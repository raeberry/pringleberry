// This is where it all goes :)

$(document).ready(function() {
  $('.nav-menu').on('click', function(e) {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    $('html').toggleClass('no-scroll');
    $('.nav-list').toggleClass('is-open');
  });
});
