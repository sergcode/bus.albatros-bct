$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
    $('.bg__menu').toggleClass('active');
    $('body').toggleClass('modal-open');
  });

});
