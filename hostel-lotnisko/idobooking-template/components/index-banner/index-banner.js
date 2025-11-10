import "slick-carousel";

app_book.run(function parallax_slider() {

  // ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= SLICK INIT 
  const jSlide = $(".parallax-slider");

  /**
   * Video control 
   */
  function videoControl(slick, control) {

    const video = slick.find(".slick-current video");

    if (video.length) {
      if (control === "play") {
        video.get(0).play();
      } else {
        video.get(0).pause();
      }
    }
  }

  /**
   * Lazy load background images.
   * Seems like the image would be loaded twice for no reason if css background would be set after 
   * creating Image element. 
   * 
   * usage:
   *  <div class="loading-big" data-src=SRC_HERE"></div>
   * @param {*} idx 
   */
  function slickLazyLoadBackground(idx) {

    const jImage = jSlide.find(".parallax-image >div").eq(idx);

    //block
    if (jImage.length === 0 || jImage.hasClass("loaded")) {
      return false;
    }
    jImage.addClass("loaded");

    const src = jImage.attr("data-src");

    // catching load event on background is impossible 
    // creating an image and then setting css background 
    // cause double request !!!
    jImage.css("background-image", "url('" + src + "')");

    // load after setting css !!! 
    const img = new Image();

    img.onload = function () {
      // on load, remove animation class 
      jImage.removeClass("loading-big");
    }
    img.src = src;

  }


  // on start 
  jSlide.on("init", function (slick) {

    // laod first background 
    slickLazyLoadBackground(0);

    // pause video 
    setTimeout(function () {
      videoControl($(slick.currentTarget), "play");
    }, 1000);
  });

  jSlide.on("beforeChange", function (event, jSlider, idx) {

    // lazy load next image 
    slickLazyLoadBackground(idx + 1)
    videoControl(jSlider.$slider, "pause");

  });

  jSlide.on("afterChange", function (event, jSlider) {
    videoControl(jSlider.$slider, "play");
  });

  //start the slider
  jSlide.slick({
    fade: true,
    speed: 1000,
    arrows: false,
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)"
  });

  /* ustawienie przejścia slidu na tyle ile trwa video */
  var durationElements = $('#parallax_topslider .parallax-image');

  var slideIndex = 0;
  var changeSlide = function(timing) {
    setTimeout(function() {
      if (timing !== 0) {
        jSlide.slick('slickNext');
      }
      if (slideIndex >= durationElements.length) slideIndex = 0;
      changeSlide(durationElements[slideIndex++].getAttribute('data-time'));
    }, timing);
  }
  changeSlide(0);

  $('.firstslide.container.animate').hide();
}, 'all', ".parallax-slider");
