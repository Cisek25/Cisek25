import "slick-carousel";

const ARROW_NEXT_HTML = () => `<button class="slick-next slick-arrow" aria-label="${TXT_CMSHOTSPOT.NastepnaOferta}" type="button"><span>${$('div.offerslist').attr('data-text-next')}</span><i class="icon-gallert_arrow_right"></i></button>`;
const ARROW_PREV_HTML = () => `<button class="slick-prev slick-arrow" aria-label="${TXT_CMSHOTSPOT.PoprzedniaOferta}" type="button"><i class="icon-gallert_arrow_left"></i><span>${$('div.offerslist').attr('data-text-prev')}</span></button>`;


app_book.run(function () {

  $('div.cmshotspot .offerslist .offer').attr('class', 'offer');

  if ($('div.cmshotspot .offerslist').hasClass('slick-initialized')) {
    $('div.cmshotspot .offerslist').slick('unslick');
  }
  $('div.cmshotspot .offerslist').slick({
    prevArrow: ARROW_PREV_HTML(),
    nextArrow: ARROW_NEXT_HTML(),
    slidesToShow: 1,
    slidesToScroll: 1,
  });
}, [1, 2], '.aboutmain__slider,div.cmshotspot .offerslist');

app_book.run(function () {

  $('div.cmshotspot .offerslist .offer').attr('class', 'offer');

  // TODO - add to libs
  $.fn.maxHeight = function () {
    let max = 0;
    this.each(function () {
      max = Math.max(max, $(this).outerHeight());
    });
    this.height(max);
    return max;
  };

  $('.cmshotspot .offer h3').maxHeight();
  $('.cmshotspot .offer .offer__box').maxHeight();

  if ($('div.cmshotspot .offerslist').hasClass('slick-initialized')) {
    $('div.cmshotspot .offerslist').slick('unslick');
  }
  $('div.cmshotspot .offerslist').slick({
    prevArrow: ARROW_PREV_HTML(),
    nextArrow: ARROW_NEXT_HTML(),
    slidesToShow: 3,
    slidesToScroll: 3,
  });


}, [3, 4], '.aboutmain__slider,div.cmshotspot .offerslist');
