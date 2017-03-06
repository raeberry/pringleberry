// This is where it all goes :)

$(document).ready(function() {
  $('.nav-menu').on('click', function(e) {
    $('.nav-list').toggleClass('is-open');
    $('html').toggleClass('no-scroll');
  });
});
