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

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}