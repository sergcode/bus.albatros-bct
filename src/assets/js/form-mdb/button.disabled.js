$(document).ready(function () {
  $('#formRequest').one('submit', function () {
    $(this).find('input[type="submit"]').attr('disabled', 'disabled');
  });
})
