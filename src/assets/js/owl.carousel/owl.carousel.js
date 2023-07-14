$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        dots: true,
        nav: true,
        margin: 20,
        center: false,
        autoWidth: false,
        mouseDrag: true,
        navElement: 'div',
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: false,
        autoplayHoverPause: true,
        smartSpeed: 600,
        touchDrag: true,
        responsive:{
            0:{
                items:1,
                dots: false
            },
            592:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            },
            1680:{
                items:4
            },
            1700:{
                items:4
            },
            1920:{
                items:4
            }
        }
    })
});

