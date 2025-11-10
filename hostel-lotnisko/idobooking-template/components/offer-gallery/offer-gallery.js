import "slick-carousel";
import "../../pages/header/imagelightbox/imagelightbox.js";

app_book.run(function() {
    $('.roomspace.sublink').after($('.offer-right-top, .payment-info'));
    $('.offer-parallax').prepend($('.slider-single'));
}, [1,2], '.offer_site', true);

app_book.run(function() {
    $('.offer_site .container.wrapper .col-lg-3.offer-right-wrapper').prepend($('.offer-right-top, .payment-info'));
    $('.offer-gallery').prepend($('.slider-single'));
}, [3,4], '.offer_site', true);


app_book.run(function() {
    
    if($('.slider-single').hasClass('slick-initialized')) {
        $('.slider-single').slick('unslick');
    }
    var infinity = $('.slider-single > a').length > 2 ? true : false;
   
    

     $('.multiple-items').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        variableWidth: true,
        //asNavFor: '.slider-single',
        draggable: false,
        responsive: [{
            breakpoint: 1024,            
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }]
    });
    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: true,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        draggable: false,
        //asNavFor: '.multiple-items',
    });

    app_book.fn.imagelightbox('.slick-slide:not(.slick-cloned) a[data-imagelightbox="f"]');

    let drag = false;

    document.addEventListener('mousedown', () => drag = false);
    document.addEventListener('mousemove', () => drag = true);

    $('.multiple-items a').off().on('mouseup',function(){
        !drag ? $('.slider-single').slick('slickGoTo',parseInt($(this).data('slick-index')-1)) : '';
        return false;
    });

}, 'all', '.page-offer', true);
