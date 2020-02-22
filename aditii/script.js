$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:5000
    });
    $('.slider_2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth:true
    });
});
