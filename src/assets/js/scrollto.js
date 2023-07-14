$(document).ready(function() {
    $('.navbar-nav__theme a[href^="#"]').click(function () {

        var target = $(this).attr('href');

        $('html, body').animate({scrollTop: $(target).offset().top - 200 }, 800);

        return false;
    });
});
