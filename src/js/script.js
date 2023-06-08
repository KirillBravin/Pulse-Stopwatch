$(document).ready(function(){
    $('.slider__inner').slick({
        infinite: true,
        speed: 1200,
        /* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/slider-button-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/slider-button-right.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                    
                }
            },
        ]
      });
});