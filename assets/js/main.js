$(document).ready(function(){

    $('#hero-area-slider').owlCarousel({
        loop: true,
        nav: true,
        // mouseDrag: false,
        items: 1,
        dots: false,
        margin: 0,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
           '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '#hero-area-nav',
    });

    $('#tenaga-pendidik-slider').owlCarousel({
        loop: true,
        nav: true,
        // mouseDrag: false,
        items: 3,
        dots: false,
        margin: 20,
        navText: [
           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
           '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '#slider-tools-1',
    });

    $('#alumni-slider').owlCarousel({
        loop: true,
        nav: true,
        // mouseDrag: false,
        items: 2,
        dots: false,
        margin: 20,
        navText: [
           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
           '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '#slider-tools-2',
    });

    $('#galeri-slider').owlCarousel({
        loop: true,
        nav: true,
        // mouseDrag: false,
        items: 3,
        dots: false,
        margin: 20,
        navText: [
           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
           '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '#slider-tools-3',
    });
})