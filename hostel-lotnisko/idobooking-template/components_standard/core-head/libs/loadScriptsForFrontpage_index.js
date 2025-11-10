var WidgetTXT = WidgetTXT || {}; WidgetTXT[1] = WidgetTXT[1] || {};
WidgetTXT[1].TrwaUruchamianieSystemuRezerwacji = 'Trwa uruchamianie systemu rezerwacji...';
WidgetTXT[1].Zamknij = 'Zamknij'; var pokoj = "przedmiot rezerwacji"; var pokoje = "__przedmiotyrezerwacji__ emporium/objecttype.class.php"; var pokoi = "przedmiotów rezerwacji"; var pokoju = "przedmiotu rezerwacji"; var idosellbooking_defaultLang = 1; var idosellbooking_domain = "https://bbrojek.emporium.idosell.com"; var idosellbooking_affiliate_id = ""; var idosellbooking_acp_configuration = { "widgetDomain": "https:\/\/bbrojek.emporium.idosell.com" }; var url_to_save_currency = "https://bbrojek.emporium.idosell.com/pl/frontpage/save-currency"; var action_after_save_currency = "index"; var displayCloseDialog = false;
var confirmmessage_pop = '';

function iai_booking_button(obj) {
  var lang = obj.lang;
  if (typeof obj.langNew !== 'undefined') {
    // automatyczny język
    lang = obj.langNew;
    if (obj.langNew == 0) {
      var langTmp = navigator.languages ?
        navigator.languages[0] :
        (navigator.language || navigator.userLanguage);
      langTmp = langTmp.split('-')[0];
      lang = obj.langIdCodes[langTmp];
      obj.lang = lang;
    }
  }

  var text3 = (typeof obj.literalsInLang[lang].button === 'undefined') ? 'Rezerwuj Online' : obj.literalsInLang[lang].button;

  var buttons = document.getElementsByClassName('i_do_sell_booking_widget_start');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].textContent = text3;
  }
}

function getParmFromHashIdoSellBooking(idosellbooking_url, idosellbooking_parm) {
  var idosellbooking_re = new RegExp("(#|hashurl).*[?&]" + idosellbooking_parm + "=([^&]+)(&|$)");
  var idosellbooking_match = idosellbooking_url.match(idosellbooking_re);
  return (idosellbooking_match ? idosellbooking_match[2] : "");
}
window.addEventListener('message', function (e) {
  const trustedBaseDomains = ['idobooking.com', 'idosell.com'];
  const isOriginTrusted = trustedBaseDomains.some(domain => {
    const isBaseDomain = e.origin === `https://${domain}`;
    const isSubdomain = e.origin.endsWith(`.${domain}`);

    return isBaseDomain || isSubdomain;
  });
  if (!isOriginTrusted) {
    console.warn('Rejected message from untrusted origin:', e.origin);
    return;
  }
  if (typeof e.data == 'object') {
    if (typeof e.data.action == 'string') {
      switch (e.data.action) {
        case 'copy':
          copyFromEvent(e.data.value);
          break;
      }
    }
    return;
  }
  if (e.data == 'noDisplayCloseDialog') {
    displayCloseDialog = false;
  }
  if (e.data.indexOf("#txtCloseDialog") == 0) {
    displayCloseDialog = true;
    confirmmessage_pop = e.data.replace("#txtCloseDialog:", "");
  }
});

async function copyFromEvent(text) {
  await navigator.clipboard.writeText(text);
}

booking_init = {
  init: function () {
    this.checkAndRedirectForMobile();
    booking_init.initButtons();
  },
  checkAndRedirectForMobile: function () {
    if (typeof idosellbooking_is_mobile != 'undefined' && idosellbooking_is_mobile == "1") {
      window.location = idosellbooking_frontpage_url;
    }
  },
  link: function () {
    return idosellbooking_domain;
  },
  initButtons: function () {
    if (!document.getElementById('idosellbooking_css')) {
      var idosellbooking_css = document.createElement("link");
      idosellbooking_css.rel = "stylesheet";
      idosellbooking_css.type = "text/css";
      idosellbooking_css.id = "idosellbooking_css";
      idosellbooking_css.href = booking_init.link() + "/template/widget/css/generate-widget.css.gz";
      document.getElementsByTagName("head")[0].appendChild(idosellbooking_css);
    }
  },
  load_widget: function (url) {
    window.open(url, '_blank');
  }
};

booking_init.init();

function getGoogleAnalyticsClientIdParam() {
  if (typeof ga !== 'undefined') {
    var clientId = null;
    ga(function (tracker) {
      clientId = tracker.get('clientId');
    });
    if (clientId) {
      return '/ga_client_id/' + clientId;
    }
  }

  return '';
}

function generateWidgetIdoSellBooking(object) {
  try {
    var client_id = object.getAttribute('data-client');
    if ((client_id !== null) && (typeof client_id != 'undefined') && (parseInt(client_id) > 0)) {
      if (typeof idosellbooking_is_new_domain_for_widget != 'undefined' && idosellbooking_is_new_domain_for_widget) {
        idosellbooking_domain = 'https://engine' + client_id + '.idobooking.com';
      } else {
        idosellbooking_domain = 'https://client' + client_id + '.idosell.com';
      }
    }
  } catch (error) { }

  var idosellbooking_link = idosellbooking_domain + '/widget/booking/defaultchoice';

  var idosellbooking_widgetStart = object;
  if (idosellbooking_widgetStart.getAttribute("data-start-date") &&
    idosellbooking_widgetStart.getAttribute("data-end-date")) {
    idosellbooking_link += '/start_date/' + idosellbooking_widgetStart.getAttribute("data-start-date") +
      '/end_date/' + idosellbooking_widgetStart.getAttribute("data-end-date");
  }
  if (idosellbooking_widgetStart.getAttribute("currency")) {
    idosellbooking_link += '/currency/' + idosellbooking_widgetStart.getAttribute("currency");
  }
  if (idosellbooking_widgetStart.getAttribute("language")) {
    idosellbooking_link += '/language/' + idosellbooking_widgetStart.getAttribute("language");
  }
  if (idosellbooking_widgetStart.getAttribute("data-currency")) {
    idosellbooking_link += '/currency/' + idosellbooking_widgetStart.getAttribute("data-currency");
  }
  if (idosellbooking_widgetStart.getAttribute("data-price_type")) {
    idosellbooking_link += '/price_type/' + idosellbooking_widgetStart.getAttribute("data-price_type");
  }
  if (idosellbooking_widgetStart.getAttribute("data-price_from")) {
    idosellbooking_link += '/price_from/' + idosellbooking_widgetStart.getAttribute("data-price_from");
  }
  if (idosellbooking_widgetStart.getAttribute("data-price_to")) {
    idosellbooking_link += '/price_to/' + idosellbooking_widgetStart.getAttribute("data-price_to");
  }
  if (idosellbooking_widgetStart.getAttribute("data-language")) {
    idosellbooking_link += '/language/' + idosellbooking_widgetStart.getAttribute("data-language");
  }
  if (idosellbooking_widgetStart.getAttribute("data-location")) {
    idosellbooking_link += '/location/' + idosellbooking_widgetStart.getAttribute("data-location");
  }
  if (idosellbooking_widgetStart.getAttribute("data-loc_country")) {
    idosellbooking_link += '/loc_country/' + idosellbooking_widgetStart.getAttribute("data-loc_country");
  }
  if (idosellbooking_widgetStart.getAttribute("data-loc_city")) {
    idosellbooking_link += '/loc_city/' + idosellbooking_widgetStart.getAttribute("data-loc_city");
  }
  if (idosellbooking_widgetStart.getAttribute("data-loc_region")) {
    idosellbooking_link += '/loc_region/' + idosellbooking_widgetStart.getAttribute("data-loc_region");
  }
  if (idosellbooking_widgetStart.getAttribute("data-persons-adult")) {
    idosellbooking_link += '/persons-adult/' + idosellbooking_widgetStart.getAttribute("data-persons-adult");
  }
  if (idosellbooking_widgetStart.getAttribute("data-persons-child-big")) {
    idosellbooking_link += '/persons-child-big/' + idosellbooking_widgetStart.getAttribute("data-persons-child-big");
  }
  if (idosellbooking_widgetStart.getAttribute("data-persons-child-small")) {
    idosellbooking_link += '/persons-child-small/' + idosellbooking_widgetStart.getAttribute("data-persons-child-small");
  }
  if (idosellbooking_widgetStart.getAttribute("data-rooms")) {
    idosellbooking_link += '/rooms/' + idosellbooking_widgetStart.getAttribute("data-rooms");
  }
  if (idosellbooking_widgetStart.getAttribute("data-promotion")) {
    idosellbooking_link += '/promotion_id/' + idosellbooking_widgetStart.getAttribute("data-promotion");
  }
  if (idosellbooking_widgetStart.getAttribute("data-show-details")) {
    idosellbooking_link += '/show-details/' + idosellbooking_widgetStart.getAttribute("data-show-details");
  }
  if (idosellbooking_widgetStart.getAttribute("data-skin")) {
    idosellbooking_link += '/skin/' + idosellbooking_widgetStart.getAttribute("data-skin");
  }
  idosellbooking_link += '/from_own_button/1';
  idosellbooking_link += getGoogleAnalyticsClientIdParam();
  var addedParam = false;
  if (idosellbooking_widgetStart.getAttribute("data-object")) {
    var objectsArray = idosellbooking_widgetStart.getAttribute("data-object").split(',');
    if (objectsArray.length) {
      idosellbooking_link += '?';
      var objectUrlArray = [];
      for (i = 0; i < objectsArray.length; ++i) {
        objectUrlArray.push('ob[' + objectsArray[i] + ']');
      }
      idosellbooking_link += objectUrlArray.join('&');
      addedParam = true;
    }
  }

  if (idosellbooking_widgetStart.getAttribute("data-offer")) {
    var offersArray = idosellbooking_widgetStart.getAttribute("data-offer").split(',');
    if (offersArray.length) {
      idosellbooking_link += ((addedParam === true) ? '&amp;' : '?');
      var offerUrlArray = [];
      for (i = 0; i < offersArray.length; ++i) {
        offerUrlArray.push('of[' + offersArray[i] + ']');
      }
      idosellbooking_link += offerUrlArray.join('&');
      addedParam = true;
    }
  }

  if (idosellbooking_widgetStart.getAttribute("data-promotions")) {
    var promotionsArray = idosellbooking_widgetStart.getAttribute("data-promotions").split(',');
    if (promotionsArray.length) {
      idosellbooking_link += ((addedParam === true) ? '&amp;' : '?');
      var promotionUrlArray = [];
      for (i = 0; i < promotionsArray.length; ++i) {
        promotionUrlArray.push('pr[' + promotionsArray[i] + ']');
      }
      idosellbooking_link += promotionUrlArray.join('&');
      addedParam = true;
    }
  }

  if ((idosellbooking_widgetStart.getAttribute("data-offer") ||
    idosellbooking_widgetStart.getAttribute("data-object")) &&
    idosellbooking_widgetStart.getAttribute("data-show-other-objects")) {
    idosellbooking_link += '&showOtherOffers=' + idosellbooking_widgetStart.getAttribute("data-show-other-objects");
  }

  if (typeof page != 'undefined' && page != '') {
    idosellbooking_link += (addedParam ? '&amp;' : '?') + 'redirect=' + page;
    addedParam = true;
  }
  if ((typeof idosellbooking_affiliate_id != 'undefined') && (parseInt(idosellbooking_affiliate_id) > 0)) {
    idosellbooking_link += (addedParam ? '&amp;' : '?') + 'booking-cpa=' + parseInt(idosellbooking_affiliate_id);
  }

  booking_init.load_widget(idosellbooking_link);
}

autoloadIdoSellBooking = function () {
  var hashParams = getCookie('hash_params');
  if (isSafari() && hashParams) {
    document.cookie = "hash_params=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.location.href = document.URL + '#widget=' + hashParams;
  }
  var documentURL = decodeURIComponent(document.URL);
  if (documentURL.indexOf('#widget?page=') != -1 || documentURL.indexOf('#widget=') != -1 || documentURL.indexOf('?hashurl=') != -1) {
    if (documentURL.indexOf('#widget?page=') != -1) {
      // automatyczne otwieranie widgetu, jeżeli w url jest parametr #widget?page
      var idosellbooking_url = getParmFromHashIdoSellBooking(documentURL, 'page');
    } else if (documentURL.indexOf('#widget=') != -1) {
      // automatyczne otwieranie widgetu, jeżeli w url jest parametr #widget=
      var idosellbooking_url = documentURL.substring(documentURL.indexOf('#widget=') + 8);
      idosellbooking_url = idosellbooking_url.substring(0, idosellbooking_url.indexOf('&'));
    } else {
      // automatyczne otwieranie widgetu, jeżeli w url jest parametr ?hashurl=
      var idosellbooking_url = documentURL.substring(documentURL.indexOf('?hashurl=') + 9);
      idosellbooking_url = idosellbooking_url.substring(0, idosellbooking_url.indexOf('&'));
    }

    if (idosellbooking_url.substring(0, 7) != 'widget/') { // zabezpieczenie dla starych linków, wygenerowanych przed zmianą domyślnego modułu na wizytówkę
      idosellbooking_url = 'widget/' + idosellbooking_url;
    }
    var idosellbooking_lang = (getParmFromHashIdoSellBooking(documentURL,
      'lang')) ? getParmFromHashIdoSellBooking(documentURL, 'lang') : idosellbooking_defaultLang;
    var idosellbooking_link = idosellbooking_domain + '/widget/booking/defaultchoice/language/' + idosellbooking_lang +
      '?redirect=' + idosellbooking_url;
    booking_init.load_widget(idosellbooking_link);
  }
};

function isSafari() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1) {
    return true;
  }
  return false;
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return false;
}
(function () {
  setTimeout(autoloadIdoSellBooking, 500);
})();

if (typeof idosellbooking_acp_configuration == 'object' && idosellbooking_acp_configuration.widgetDomain) {
  (function (configuration) {
    if (typeof sessionStorage != 'undefined') {
      if (sessionStorage.getItem('IdoSellBooking.ACP.initData') === null) {
        sessionStorage.setItem('IdoSellBooking.ACP.initData', JSON.stringify({
          referrer: document.referrer,
          location: window.location.href
        }));
      }
    }

    window.addEventListener("message", function (event) {
      if (event.origin == configuration.widgetDomain) {
        if (event.data.action == 'ActivityTracking.getStats') {
          const data = {
            viewportX: window.innerWidth,
            viewportY: window.innerHeight,
            referrer: document.referrer,
            location: window.location.href
          };

          if (typeof sessionStorage != 'undefined') {
            data.initData = JSON.parse(sessionStorage.getItem('IdoSellBooking.ACP.initData'));
          }

          event.source.postMessage({ action: 'ActivityTracking.setStats', data: data }, configuration.widgetDomain);
        }
      }
    }, false);
  })(idosellbooking_acp_configuration);
} else {
  if (typeof console == 'object') {
    console.info('ACP: Unable to get configuration.');
  }
}
$(document).ready(function () {
  $("#menuToggle").click(function (e) {
    $(this).parent().next().toggle();
    $("#menuToggle").parent().toggleClass("mobile-top-shadow");
    return false;
  });

  $("#menuToggle2").click(function (e) {
    $(this).parent().next().toggle();
    $("#menuToggle2").parent().toggleClass("mobile-top-shadow");
    return false;
  });

  /**
   * Ustawianie waluty dla wizytówki
   */
  $("#frontpage_currency, #frontpage_currency_mobile").change(function () {
    var url = url_to_save_currency + '/currency/' + $(this).val();
    if (typeof action_after_save_currency != 'undefined') {
      url += '/url/' + action_after_save_currency;
    }
    if (typeof id_after_save_currency != 'undefined') {
      url += '/id/' + id_after_save_currency;
    }

    window.location = url;
  });

  /**
   * Ustawianie języka dla wizytówki
   */
  $('.mobile-flags').find('a').each(function (i, element) {
    $(element).click(function () {
      var Cookies = new FrontpageCookies;
      Cookies.setLanguage($(this).data('langid'));
    })
  });
});
/**
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {

  var pluses = /\+/g;

  function encode(s) {
    return config.raw ? s : encodeURIComponent(s);
  }

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s);
  }

  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value));
  }

  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      // This is a quoted cookie as according to RFC2068, unescape...
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }

    try {
      // Replace server-side written pluses with spaces.
      // If we can't decode the cookie, ignore it, it's unusable.
      // If we can't parse the cookie, ignore it, it's unusable.
      s = decodeURIComponent(s.replace(pluses, ' '));
      return config.json ? JSON.parse(s) : s;
    } catch (e) { }
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value;
  }

  var config = $.cookie = function (key, value, options) {

    // Write

    if (value !== undefined && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);

      if (typeof options.expires === 'number') {
        var days = options.expires, t = options.expires = new Date();
        t.setTime(+t + days * 864e+5);
      }

      return (document.cookie = [
        encode(key), '=', stringifyCookieValue(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
        options.path ? '; path=' + options.path : '',
        options.domain ? '; domain=' + options.domain : '',
        options.secure ? '; secure' : ''
      ].join(''));
    }

    // Read

    var result = key ? undefined : {};

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all. Also prevents odd result when
    // calling $.cookie().
    var cookies = document.cookie ? document.cookie.split('; ') : [];

    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split('=');
      var name = decode(parts.shift());
      var cookie = parts.join('=');

      if (key && key === name) {
        // If second argument (value) is a function it's a converter...
        result = read(cookie, value);
        break;
      }

      // Prevent storing a cookie that we couldn't decode.
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }

    return result;
  };

  config.defaults = {};

  $.removeCookie = function (key, options) {
    if ($.cookie(key) === undefined) {
      return false;
    }

    // Must not alter options, thus extending a fresh object...
    $.cookie(key, '', $.extend({}, options, { expires: -1 }));
    return !$.cookie(key);
  };

}));
FrontpageCookies = function () { };
FrontpageCookies.prototype = {
  defaultFrontpageCookieParams: {
    name: 'idosellbooking_frntpg', // przy zmianie pamiętaj o zmianie stałej: Cookie::COOKIE_NAME_FRONTPAGE
    settings: {
      expires: 7,
      path: '/'
    }
  },

  /**
   * Zwraca język wybrany przez użytkownika dla wizytówki
   * @throws
   * @returns {int}
   */
  getLanguage: function () {
    var cookie = $.cookie(FrontpageCookies.prototype.defaultFrontpageCookieParams.name);
    if (cookie != undefined) {
      var FrontpageProperties = $.parseJSON(cookie);
    } else {
      throw 'Cookie not set';
    }

    if (FrontpageProperties.language != undefined) {
      return FrontpageProperties.language;
    } else {
      throw 'Language not set';
    }
  },

  /**
   * Ustawia język dla wizytówki
   * @param {int} languageId
   */
  setLanguage: function (languageId) {
    var FrontpageProperties = $.parseJSON($.cookie(FrontpageCookies.prototype.defaultFrontpageCookieParams.name));
    FrontpageProperties.language = languageId;

    $.cookie(
      FrontpageCookies.prototype.defaultFrontpageCookieParams.name,
      JSON.stringify(FrontpageProperties),
      FrontpageCookies.prototype.defaultFrontpageCookieParams.settings
    );
  }
};
