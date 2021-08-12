$('.banner-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
});

$(document).ready(function () {
    $('.venobox').venobox();
});


$('.testimonial-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
});

$('.counter').counterUp();

$('#colorful').colorfulTab();

$('.img-slider').slick({
    dots: false,
    Array: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
});