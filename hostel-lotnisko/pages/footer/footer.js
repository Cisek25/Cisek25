import "../../components/footer-contact/footer-contact.js";
import "../../components/cookies/cookies.js";
import "../../components/widget-datapicker/widget-datapicker.js";
import '../../components/polski-kupon-turystyczny/polski-kupon-turystyczny.js';


// *BACKTOP SCriptPowrotNaPoczatekStrony
app_book.fn.backTop = function(options) {
    var settings = $.extend({'speed':500,'txt':'&uarr;','id':'backTop', 'duration':500}, options);
    $('#'+settings['id']).remove();
    $('body').append(`<a tabindex="0" title="${TXT_MENU.PowrotNaPoczatekStrony}" id=`+settings['id']+'>'+settings['txt']+'</a>');
    var backBtn = $('#'+settings['id']);

    var position = $(window).height();
    if (2*position < ($(document).height() - position) ) {
      position = 2*$(window).height();
    }
    var speed = settings['speed'];
    var getRightOffset = function() {
        var offsetRight = 10;
        var freeSpace = (($(window).width() - $('.page').outerWidth())) * 0.5 - (2 * offsetRight);
        if (freeSpace >= backBtn.outerWidth()) {
            offsetRight = freeSpace - backBtn.outerWidth() + offsetRight;
        }
        backBtn.css('right',offsetRight+'px');
    };
    getRightOffset();
    $(window).resize(function(){
        getRightOffset();
    });
    $(document).scroll(function(){
        var pos = $(window).scrollTop();
        if(pos >= position){
            backBtn.fadeIn(speed);
        } else{
            backBtn.fadeOut(speed);
        }
    });
    backBtn.on('keydown' , function(event) {
      if (event.code === "Enter" || event.code === "Space") {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();}
        $("html, body").animate({
          scrollTop:0
        },
        {
          duration: settings['duration']
        });
      });

    backBtn.click(function(){
        $("html, body").animate({
                scrollTop:0
            },
            {
              duration: settings['duration']
            });
    });
}

app_book.run(function backTop() {

  app_book.fn.backTop({
    'txt': '<i class="icon-arrow_smaller_down"></i>'
  });

}, "all", "footer");

app_book.run(function cookieMsg() {

  function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  $('a.cookieMsgButton').on('click', function() {
    setCookie('cookie_msg_accepted', 1, 90);
    $('#cookieMsg').hide();
    return false;
  });

  $('.cookieMsgLink').on('click', function() {
    booking_init.load_widget('/widget/index.php?module=cookies&displayOnToplayer=true');
    return false;
  });

  if(getCookie('cookie_msg_accepted')) $('#cookieMsg').hide();
  else $('#cookieMsg').show();

  app_book.fn.backTop({
    'txt': '<i class="icon icon-arrow_up"></i>'
  });

}, "all", "#cookieMsg");