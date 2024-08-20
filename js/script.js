$(document).ready(function () {
  $.get('../common/navbar/navbar.html', function (data) {
    $('#navbar-placeholder').html(data);
  });
});

$(document).ready(function () {
  $('#navbar-placeholder').load('../common/navbar/navbar.html', function () {
    // Apply the scroll effect once the navbar is loaded
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
      } else {
        $('.navbar').removeClass('scrolled');
      }
    });
  });
});
