$('[name="phone"]').mask('+7 (999) 999 - 99 - 99');


$('.clients-slider').slick({
    slidesToShow: 6,
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    responsive: [
        {
            breakpoint: 1430,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
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

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

// активная ссылка меню
$('.menu li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});
// end