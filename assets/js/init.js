$(document).ready(function () {
    console.log('Hello');
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoPlay:true,
        // autoSpeed:1500,
        prevArrow: '<button class="slide-arrow prev-arrow"><</button>',
        nextArrow: '<button class="slide-arrow next-arrow">></button>'
    });

    $('.text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoPlay:true,
        // autoSpeed:1500,
        // prevArrow: '<button class="slide-arrow prev-arrow"><</button>',
        // nextArrow: '<button class="slide-arrow next-arrow">></button>'
    });
});