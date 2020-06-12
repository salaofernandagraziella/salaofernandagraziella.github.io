jQuery(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 600) {
      $('#mainNav').css('background-color', 'rgba(33,37,41)');
    } else {
      $('#mainNav').css('background-color', 'rgb(0, 0, 0, 0)');
    }
  });
});
