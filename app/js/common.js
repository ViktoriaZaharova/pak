$('[name="phone"]').mask('+7 (999) 999 - 99 - 99');


$('.clients-slider').slick({
    slidesToShow: 6,
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>'
});

$('.home-slider').slick({
    slidesToShow: 1,
    dots: true,
    fade: true,
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    appendDots: '.home-slider-nav',
    appendArrows: '.home-slider-nav',
});