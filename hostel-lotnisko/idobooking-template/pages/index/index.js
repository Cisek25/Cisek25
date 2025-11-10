// load style for page - DO NOT CHANGE !
import "./index.less";

import "./libs/fullpage.js";

// template components
import "../../components/index-banner/index-banner.js";
//import "../../components/widget-search/widget-search.js";
import "../../components/index-about/index-about.js";
import "../../components/index-news/index-news.js";
import "../../components/distinguished/distinguished.js";

// ~=~=~=~=~=~=~=~=~= full page
// index page has full page, init only on PC
app_book.run(
  function page_index() {
    // each section is a slide
    const elSetions = document.querySelectorAll(".fullpage-wrapper .section");
    if (!elSetions.length || ($.fn.fullpage && $.fn.fullpage.destroy)) {
      // if init do not rebuild
      return false;
    }

    // add bouncer button
    const bouncer = $(
      '<div id="bounce"><i class="icon icon-arrow_big_down"></i></div>'
    ).appendTo("body");
  
      $("body").on("click", "#bounce", function () {
        $("html, body").animate({ scrollTop: $('.fullpage-wrapper .fp-completely').height() }, 1000);
        $('#bounce').hide();
      });
      if(window.pageYOffset > 30) {
        $('#bounce').hide();
      }
    $(window).on('scroll' , () => {
      if(window.pageYOffset > 30) {
        $('#bounce').hide();
      } else {
        $('#bounce').show();
      }
    });

    // TEN fragment jest pozostawiony aby zachować wsteczną zgodność z DEFAULT 4-7
    $("div.about-main-description > .section").unwrap();
    $(".fullpage-wrapper").fullpage({
      verticalCentered: true,
      css3: false,
      fixedElements: "#bounce,#cookieMsg, header,.news-container",
      dragAndMove: true,

      onLeave: function (index, nextIndex, direction) {
        // hide on last element
        if (nextIndex >= elSetions.length) {
          //jBounce.hide(200);
        } else {
          //jBounce.show(200);
        }
      },
      // afterRender:
      // This callback is fired just after the structure of the page is generated. This is the
      // callback you want to use to initialize other plugins or fire any code which requires the
      // document to be ready (as this plugin modifies the DOM to create the resulting structure).
      afterRender: function () {
        // if one slide, no need of bouncer
        if (elSetions.length === 1) {
          //jBounce.remove();
        }

        // enable scrolling
        $.fn.fullpage.setAutoScrolling(false);
        $.fn.fullpage.setFitToSection(false);

        // ! wsteczna kompatybilność, nie wiadomo co robi ta klasa #parallax_topslider .parallax_slide
        // usunać w razie problemów
        $("#parallax_topslider .parallax_slide, .firstslide").addClass(
          "animate"
        );

        // ? refactor - do we need this
        //$("body").css("height", "auto");
        //$(window).trigger("resize")
      },
    });

  },
  "all",
  ".page-index"
); // once

/*
app_book.run(function page_index() {

    // destroy fullpage if set
    if($.fn.fullpage && $.fn.fullpage.destroy) {
        $.fn.fullpage.destroy("all");
    }

}, [1, 2], ".page-index");*/

