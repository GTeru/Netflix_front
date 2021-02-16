$('.owl-carousel').owlCarousel({
    loop:false,
    nav:true,
    dots:false,
    margin:10,
    navContainerClass:'owl-nav-custom', 
    navText:[
        '<span aria-label="' + 'Previous' + '"><i class="fas fa-angle-left"></i></span>',
        '<span aria-label="' + 'Next' + '"><i class="fas fa-angle-right"></i></span>'
    ],
    navClass: [
        'owl-prev-custom',
        'owl-next-custom'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})