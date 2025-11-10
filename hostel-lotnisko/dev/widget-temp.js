var iai_booking_search = function (obj) {
  var lang = '';
  iai_booking_search.hideContainer = true;
  if (typeof obj.langNew !== 'undefined') {
    lang = obj.langNew;
    // automatyczny język
    if (obj.langNew == 0) {
      var langTmp = navigator.languages
        ? navigator.languages[0]
        : (navigator.language || navigator.userLanguage);
      langTmp = langTmp.split('-')[0];
      lang = obj.langIdCodes[langTmp];
      obj.lang = lang;
    }
    var months = (typeof obj.literalsInLang[lang].months === 'undefined') ? (typeof obj.months === 'undefined') ? obj.months : ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"] : obj.literalsInLang[lang].months;
    var days = (typeof obj.literalsInLang[lang].days === 'undefined') ? ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"] : obj.literalsInLang[lang].days;
    var txt0 = (typeof obj.literalsInLang[lang].trigger === 'undefined') ? 'REZERWACJA ONLINE' : obj.literalsInLang[lang].trigger;
    var txt1 = (typeof obj.literalsInLang[lang].label1 === 'undefined') ? 'Od' : obj.literalsInLang[lang].label1;
    var txt2 = (typeof obj.literalsInLang[lang].label2 === 'undefined') ? 'Do' : obj.literalsInLang[lang].label2;
    var txt5 = (typeof obj.literalsInLang[lang].label3 === 'undefined') ? 'Osoby' : obj.literalsInLang[lang].label3;
    var txt6 = (typeof obj.literalsInLang[lang].label4 === 'undefined') ? 'Pokoje' : obj.literalsInLang[lang].label4;
    var txt7 = (typeof obj.literalsInLang[lang].label5 === 'undefined') ? 'Lokalizacja' : obj.literalsInLang[lang].label5;
    var txt3 = (typeof obj.literalsInLang[lang].button === 'undefined') ? 'Sprawdź dostępność' : obj.literalsInLang[lang].button;
  } else {
    // w przypadku wygenerowanych wcześniej kodow
    var months = (typeof obj.months === 'undefined') ? ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"] : obj.months;
    var days = (typeof obj.days === 'undefined') ? ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"] : obj.days;
    var txt0 = (typeof obj.trigger === 'undefined') ? 'REZERWACJA ONLINE' : obj.trigger;
    var txt1 = (typeof obj.label1 === 'undefined') ? 'Od' : obj.label1;
    var txt2 = (typeof obj.label2 === 'undefined') ? 'Do' : obj.label2;
    var txt5 = (typeof obj.label3 === 'undefined') ? 'Osoby' : obj.label3;
    var txt6 = (typeof obj.label4 === 'undefined') ? 'Pokoje' : obj.label4;
    var txt7 = (typeof obj.label5 === 'undefined') ? 'Lokalizacja' : obj.label5;
    var txt3 = (typeof obj.button === 'undefined') ? 'Sprawdź dostępność' : obj.button;
    lang = obj.lang;
  }

  var txt4 = (typeof obj.placeholder === 'undefined') ? '' : obj.placeholder;
  var txt8 = (typeof obj.label6 === 'undefined') ? 'Pozostałe' : obj.label6;
  var txt9 = (typeof obj.label7 === 'undefined') ? 'Cena' : obj.label7;
  var icon = (typeof obj.icon === 'undefined') ? 'bed' : obj.icon;
  var showPersons = (typeof obj.showPersons === 'undefined') ? false : obj.showPersons;
  var showRooms = (typeof obj.showRooms === 'undefined') ? false : obj.showRooms;
  var showPrice = (typeof obj.showPrice === 'undefined') ? false : obj.showPrice;
  var showLocation = (typeof obj.showLocation === 'undefined') ? false : obj.showLocation;
  var closeLocationBind = false;
  var locationUrl = (typeof obj.locationUrl === 'undefined') ? false : obj.locationUrl;
  var clientId = obj.clientId;
  var mainColor = (typeof obj.mainColor === 'undefined') ? '#4ab24f' : obj.mainColor;
  var css = (typeof obj.css === 'undefined') ? '#iai_book_se button, .iai_book_trigger b{background:' + mainColor + ';} #iaicalendar td.iaiactiveday{background:#3f51b5;} form .iaiicon-users,form .iaiicon-bed, form .iaiicon-cab , form .iaiicon-calendar, form .iaiicon-location {color:#3f51b5;}' : obj.css;
  var wrapperId = (typeof obj.wrapperId === 'undefined') ? 'iai-search' : obj.wrapperId;
  var mode = (typeof obj.mode === 'undefined') ? 'horizontal' : obj.mode;

  iai_g = function (id) {
    return document.getElementById(id);
  }
  getFormPosition = function () {
    var topPos = iai_g('iai_book_se').getBoundingClientRect().top;
    return window.innerHeight - topPos > 350
  }
  iai_location_check_countries = function (containerId) {
    var iaicountries = document.getElementsByClassName(containerId);
    var numberCountries = 0;
    for (var z = 0; z < iaicountries.length; z++) {
      for (var i = 0; i < iaicountries[z].childNodes.length; i++) {
        var el = iaicountries[z].childNodes[i];
        if (el.className == 'iailocation-country') {
          numberCountries++;
        }
      }
    }

    if (numberCountries == 1) {
      for (var z = 0; z < iaicountries.length; z++) {
        for (var i = 0; i < iaicountries[z].childNodes.length; i++) {
          var el = iaicountries[z].childNodes[i];
          if (el.className == 'iailocation-country') {
            el.style.display = 'none';
          }
        }
      }
    }

    return numberCountries;
  },

    iai_location_check_districts = function (containerId) {
      var iaidistricts = document.getElementsByClassName(containerId);
      var numberDistricts = 0;
      for (var z = 0; z < iaidistricts.length; z++) {
        for (var i = 0; i < iaidistricts[z].childNodes.length; i++) {
          var el = iaidistricts[z].childNodes[i];
          if (el.className == 'iailocation-district') {
            numberDistricts++;
          }
        }
      }

      if (numberDistricts == 1) {
        for (var z = 0; z < iaidistricts.length; z++) {
          for (var i = 0; i < iaidistricts[z].childNodes.length; i++) {
            var el = iaidistricts[z].childNodes[i];
            if (el.className == 'iailocation-district') {
              el.style.display = 'none';
            }
          }
        }
      }

      return numberDistricts;
    },

    iai_location_check_cities = function (containerId) {
      var iaicities = document.getElementsByClassName(containerId);
      var numberCities = 0;
      for (var z = 0; z < iaicities.length; z++) {
        for (var i = 0; i < iaicities[z].childNodes.length; i++) {
          var el = iaicities[z].childNodes[i];
          if (el.className == 'iailocation-city') {
            numberCities++;
          }
        }
      }

      return numberCities;
    },

    iai_location_padding_countries = function (containerId) {
      var iaicountries = document.getElementsByClassName(containerId);
      var paddingOffset;
      for (var z = 0; z < iaicountries.length; z++) {
        for (var i = 0; i < iaicountries[z].childNodes.length; i++) {
          var el = iaicountries[z].childNodes[i];
          if (el.tagName == 'LI') {
            if (el.style.paddingLeft == '') {
              paddingOffset = '10px';
            } else {
              paddingOffset = el.style.paddingLeft
            }
          } else if (el.tagName == 'UL') {
            for (var j = 0; j < el.childNodes.length; j++) {
              if (el.childNodes[j].tagName == 'LI') {
                el.childNodes[j].style.paddingLeft = (parseInt(paddingOffset.replace(/px/, '')) + 15) + 'px';
              }
            }
          }
        }
      }
    },

    iai_location_padding_cities = function (containerId) {
      var iaicities = document.getElementsByClassName(containerId);
      var paddingOffset;
      for (var z = 0; z < iaicities.length; z++) {
        for (var i = 0; i < iaicities[z].childNodes.length; i++) {
          var el = iaicities[z].childNodes[i];
          if (el.tagName == 'LI') {
            if (el.style.paddingLeft == '') {
              paddingOffset = '10px';
            } else {
              paddingOffset = el.style.paddingLeft
            }
          } else if (el.tagName == 'UL') {
            for (var j = 0; j < el.childNodes.length; j++) {
              if (el.childNodes[j].tagName == 'LI') {
                el.childNodes[j].style.paddingLeft = (parseInt(paddingOffset.replace(/px/, '')) + 15) + 'px';
              }
            }
          }
        }
      }
    },

    iai_location_padding_districts = function (containerId) {
      var iaidistricts = document.getElementsByClassName(containerId);

      var differentNames = {};
      var differentName = false;
      for (var z = 0; z < iaidistricts.length; z++) {
        var numberOfDiscticts = 0;
        for (var i = 0; i < iaidistricts[z].childNodes.length; i++) {
          var el = iaidistricts[z].childNodes[i];
          if (el.tagName == 'LI') {
            numberOfDiscticts++;
          }
        }
        differentNames[z] = numberOfDiscticts;
        if (numberOfDiscticts > 1) {
          differentName = true;
        }
      }

      var paddingOffset;
      for (var z = 0; z < iaidistricts.length; z++) {
        for (var i = 0; i < iaidistricts[z].childNodes.length; i++) {
          var el = iaidistricts[z].childNodes[i];
          if (el.tagName == 'LI') {
            if (el.style.paddingLeft == '' || !differentName) {
              paddingOffset = '10px';
            } else {
              paddingOffset = el.style.paddingLeft
            }
            if (!differentName || differentNames[z] == 1) {
              el.style.display = 'none';
            }
          } else if (el.tagName == 'UL') {
            for (var j = 0; j < el.childNodes.length; j++) {
              if (el.childNodes[j].tagName == 'LI') {
                el.childNodes[j].style.paddingLeft = (parseInt(paddingOffset.replace(/px/, '')) + 15) + 'px';
              }
            }
          }
        }
      }
    },

    iai_location_hide = function (containerId) {
      var iaielements = document.getElementsByClassName(containerId);
      for (var z = 0; z < iaielements.length; z++) {
        iaielements[z].style.display = 'none';
        for (var i = 0; i < iaielements[z].childNodes.length; i++) {
          if (iaielements[z].childNodes[i].className != 'iailocation-seleted') {
            iaielements[z].childNodes[i].style.display = 'none';
          }
        }
      }
    },

    iai_location_show_uder = function (containerId, ids, level) {
      var z;
      var iaielements = document.getElementsByClassName(containerId);
      for (z = 0; z < iaielements.length; z++) {
        if (iaielements[z].getAttribute('data-location-ids') == ids.join()) {
          iaielements[z].parentNode.style.display = 'block';
          iaielements[z].nextSibling.style.display = 'block';

          break;
        }
      }

      if (iaielements[z].nextSibling.childNodes.length == 2) {
        if (level == 'city' || level == 'country') {
          iaielements[z].nextSibling.childNodes[1].style.cssText = iaielements[z].nextSibling.childNodes[1].style.cssText.replace('none', 'block');
          iai_booking_search.locationSelected.district = iai_booking_search.locationSelected.city;
          iai_booking_search.locationSkip.district = 1;
        }
      }
    },

    iai_location_hide_under = function (containerId) {
      var iaielements = document.getElementsByClassName(containerId);

      var differentNames = false;
      for (var z = 0; z < iaielements.length; z++) {
        for (var i = 0; i < iaielements[z].childNodes.length; i++) {
          var el = iaielements[z].childNodes[i];
          if (el.tagName == 'LI' && el.innerHTML != '') {
            differentNames = true;
            break;
          }
        }
        if (differentNames) {
          break;
        }
      }

      for (var z = 0; z < iaielements.length; z++) {
        for (var i = 0; i < iaielements[z].childNodes.length; i++) {
          var el = iaielements[z].childNodes[i];
          if (el.tagName == 'UL' && differentNames) {
            el.style.display = 'none';
          } else if (el.tagName == 'LI' && !differentNames) {
            el.style.display = 'none';
          }
        }
      }
    },

    iai_location_return = function(fromElement) {
      let parent = fromElement?.closest('.widget__option');
    
      if (parent) {
        const button = parent.querySelector('.iai_widget_btn');
        if (button) {
          button.focus();
        }
      }
    };

    iai_location_key_down = function(event, runFn) {
      if (event.code === "Enter" || event.code === "Space") {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        runFn();
      }
      if (event.code === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        iai_location_return(event.srcElement);
      }
    },

    iai_set_location = function (element) {
      var input = document.getElementById('iai_booking_location'),
        label = document.getElementById('iai_booking_location_label');

      if (iai_booking_search.locationAdvancedDisplay) {
        switch (element.getAttribute('class')) {
          case 'iailocation-country':
            iai_booking_search.locationSelected.country = element.getAttribute('data-location-ids').split(',');
            iai_booking_search.locationSelectedName.country = element.innerText.match(/(.*) \([0-9]+\)$/)[1];
            input.value = element.innerText.match(/(.*) \([0-9]+\)$/)[1];
            label.innerHTML = element.innerText.match(/(.*) \([0-9]+\)$/)[1];
            break;
          case 'iailocation-city':
            iai_booking_search.locationSelected.city = element.getAttribute('data-location-ids').split(',');
            iai_booking_search.locationSelectedName.city = element.innerText.match(/(.*) \([0-9]+\)$/)[1];
            input.value = element.innerText.match(/(.*) \([0-9]+\)$/)[1];
            label.innerHTML = element.innerText.match(/(.*) \([0-9]+\)$/)[1];
            break;
          case 'iailocation-district':
            iai_booking_search.locationSelected.district = element.getAttribute('data-location-ids').split(',');
            iai_booking_search.locationSelectedName.district = element.innerText.match(/(.*) \([0-9]+\)$/)[1];
            input.value = element.innerText.match(/(.*) \([0-9]+\)$/)[1];
            label.innerHTML = element.innerText.match(/(.*) \([0-9]+\)$/)[1];
            break;
          case 'iailocation-addres':
            iai_booking_search.locationSelected.addres = element.getAttribute('data-location-ids').split(',');
            iai_booking_search.locationSelectedName.addres = element.innerText;
            input.value = element.innerText;
            label.innerHTML = element.innerText;
            break;
        }
        input.setAttribute('data-location-ids', element.getAttribute('data-location-ids'));
        iai_booking_search.hideContainer = true;
        iai_location();
        iai_booking_search.hideContainer = true;
        const liElement = document.querySelector(`li[data-location-ids='${element.getAttribute('data-location-ids')}']`);
        liElement.setAttribute("aria-expanded", "true");
      } else {
        input.value = element.innerText;
        input.setAttribute('data-location-ids', element.getAttribute('data-location-ids'));
        label.innerHTML = element.innerText;

        document.getElementById('iailocation-container').style.display = 'none';
        iai_booking_search.hideContainer = true;
      }
    },

    iai_location_clear_selected = function (field) {
      switch (field) {
        case 'country':
          iai_booking_search.locationSelected['country'] = 0;
          iai_booking_search.locationSelectedName['country'] = 0;
          iai_booking_search.locationSkip['country'] = 0;

        case 'city':
          iai_booking_search.locationSelected['city'] = 0;
          iai_booking_search.locationSelectedName['city'] = 0;
          iai_booking_search.locationSkip['city'] = 0;

        case 'district':
          iai_booking_search.locationSelected['district'] = 0;
          iai_booking_search.locationSelectedName['district'] = 0;
          iai_booking_search.locationSkip['district'] = 0;

        case 'addres':
          iai_booking_search.locationSelected['addres'] = 0;
          iai_booking_search.locationSelectedName['addres'] = 0;
          iai_booking_search.locationSkip['addres'] = 0;

      }

      var input = document.getElementById('iai_booking_location'),
        label = document.getElementById('iai_booking_location_label');

      var dictionaries = iai_location_get_dictionaries();
      var countries = dictionaries[0];
      var cities = dictionaries[1];
      var districts = dictionaries[3];
      let locationIds = '';
      if (iai_booking_search.locationSelected['district'] != 0 && iai_booking_search.locationSkip['district'] == 0) {
        input.setAttribute('data-location-ids', iai_booking_search.locationSelected['district']);
        input.value = iai_booking_search.locationSelectedName['district'];
        label.innerHTML = iai_booking_search.locationSelectedName['district'];
        locationIds = iai_booking_search.locationSelected['district'];
      } else if (iai_booking_search.locationSelected['city'] != 0 && iai_booking_search.locationSkip['city'] == 0) {
        input.setAttribute('data-location-ids', iai_booking_search.locationSelected['city']);
        input.value = iai_booking_search.locationSelectedName['city'];
        label.innerHTML = iai_booking_search.locationSelectedName['city'];
        locationIdst = iai_booking_search.locationSelected['city'];
      } else if (iai_booking_search.locationSelected['country'] != 0 && iai_booking_search.locationSkip['country'] == 0) {
        input.setAttribute('data-location-ids', iai_booking_search.locationSelected['country']);
        input.value = iai_booking_search.locationSelectedName['country'];
        label.innerHTML = iai_booking_search.locationSelectedName['country'];
        locationIds = iai_booking_search.locationSelected['country'];
      } else {
        input.removeAttribute('data-location-ids');
        input.value = '';
        label.innerHTML = txt7;
      }

      iai_location();
      if(locationIds !== '') {
        const liElement = document.querySelector(`#iai_location li[data-location-ids = "${locationIds}"]`);
        liElement.setAttribute("aria-expanded", "true");
      }
    },

    iai_array_diff = function (arr, arr2) {
      var ret = [];
      for (var i in arr) {
        if (arr2.indexOf(arr[i]) > -1) {
          ret.push(arr[i]);
        }
      }
      return ret;
    },

    iai_location_get_html = function (dictionaries, insert) {
      var countries = dictionaries[0];
      var cities = dictionaries[1];
      var addresses = dictionaries[2];
      var districts = dictionaries[3];
      var tree = dictionaries[4];

      var calendar_html = '<ul class="iailocation-countries';

      if (iai_booking_search.locationAdvancedDisplay) {
        calendar_html += ' iailocation-advanced';
      } else {
        calendar_html += ' iailocation-simple';
      }
      calendar_html += '">';

      if (iai_booking_search.locationSelected.country != 0 && iai_booking_search.locationSkip.country == 0) {
        calendar_html += '<li class="iailocation-seleted">' +
          '<span class="iailocation-seleted-left">' + iai_booking_search.locationSelectedName.country + '</span>' +
          '<span class="iailocation-seleted-right" tabindex="0" aria-label="'+ TXT.Cofnij +'" onkeydown="iai_location_key_down(event, () => iai_location_clear_selected(\'country\', ' + insert + '))" onclick="iai_location_clear_selected(\'country\', ' + insert + ')">x</span>' +
          '</li>';
      }


      var numberCities = 0;
      var cityName = '';
      for (var city in cities) {
        if (cities.hasOwnProperty(city)) {
          numberCities++
          cityName = city;
        }
      }

      if ((iai_booking_search.locationSelected.city != 0 && iai_booking_search.locationSkip.city == 0)) {
        calendar_html += '<li class="iailocation-seleted">';
        calendar_html += '<span class="iailocation-seleted-left">' + iai_booking_search.locationSelectedName.city + '</span>';
        calendar_html += '<span class="iailocation-seleted-right" tabindex="0" aria-label="'+ TXT.Cofnij +'" onkeydown="iai_location_key_down(event, () => iai_location_clear_selected(\'city\', ' + insert + '))" onclick="iai_location_clear_selected(\'city\', ' + insert + ')">x</span>';
        calendar_html += '</li>';
      }

      if (iai_booking_search.locationSelected.district != 0 && iai_booking_search.locationSkip.district == 0) {
        calendar_html += '<li class="iailocation-seleted">' +
          '<span class="iailocation-seleted-left">' + iai_booking_search.locationSelectedName.district + '</span>' +
          '<span class="iailocation-seleted-right" tabindex="0" aria-label="'+ TXT.Cofnij +'" onkeydown="iai_location_key_down(event, () => iai_location_clear_selected(\'district\', ' + insert + '))" onclick="iai_location_clear_selected(\'district\', ' + insert + ')">x</span>' +
          '</li>';
      }

      if (iai_booking_search.locationSelected.addres != 0 && iai_booking_search.locationSkip.addres == 0) {
        calendar_html += '<li class="iailocation-seleted">' +
          '<span class="iailocation-seleted-left">' + iai_booking_search.locationSelectedName.addres + '</span>' +
          '<span class="iailocation-seleted-right" tabindex="0" aria-label="'+ TXT.Cofnij +'" onkeydown="iai_location_key_down(event, () => iai_location_clear_selected(\'addres\', ' + insert + '))" onclick="iai_location_clear_selected(\'addres\', ' + insert + ')">x</span>' +
          '</li>';
      }

      var locationsIds = [];
      for (var country in tree) {
        if (!tree.hasOwnProperty(country)) {
          continue;
        }
        calendar_html += '<li class="iailocation-country" tabindex="0" aria-label="' + country + '" aria-expanded="false" data-parent-id="' + insert + '" data-location-ids="' + countries[country].join() + '" onclick="iai_set_location(this)" onkeydown="iai_location_key_down(event, () => iai_set_location(this))">';
        if (iai_booking_search.locationAdvancedDisplay) {
          calendar_html += country + ' (' + countries[country].length + ')';
        } else {
          calendar_html += country;
        }
        calendar_html += '</li>';
        calendar_html += '<ul class="iailocation-cities">';
        for (var city in tree[country]) {
          if (!tree[country].hasOwnProperty(city)) {
            continue;
          }
          locationsIds = iai_array_diff(countries[country], cities[city]);
          calendar_html += '<li class="iailocation-city" tabindex="0" aria-label="' + city + '" aria-expanded="false" data-parent-id="' + insert + '" data-location-ids="' + locationsIds.join() + '" onclick="iai_set_location(this)" onkeydown="iai_location_key_down(event, () => iai_set_location(this))">';
          if (iai_booking_search.locationAdvancedDisplay) {
            calendar_html += city + ' (' + locationsIds.length + ')';
          } else {
            calendar_html += city;
          }
          calendar_html += '</li>';

          calendar_html += '<ul class="iailocation-districts">';
          for (var district in tree[country][city]) {
            if (!tree[country][city].hasOwnProperty(district)) {
              continue;
            }
            locationsIds = iai_array_diff(cities[city], districts[district]);
            calendar_html += '<li class="iailocation-district" tabindex="0" aria-label="' + district + '" aria-expanded="false" data-parent-id="' + insert + '" data-location-ids="' + locationsIds.join() + '" onclick="iai_set_location(this)" onkeydown="iai_location_key_down(event, () => iai_set_location(this))">';
            if (iai_booking_search.locationAdvancedDisplay) {
              calendar_html += district + ' (' + locationsIds.length + ')';
            } else {
              calendar_html += district;
            }
            calendar_html += '</li>';

            calendar_html += '<ul class="iailocation-addresses">';
            for (var addres in tree[country][city][district]) {
              if (!tree[country][city][district].hasOwnProperty(addres)) {
                continue;
              }
              locationsIds = iai_array_diff(districts[district], addresses[addres]);
              calendar_html += '<li class="iailocation-addres" tabindex="0" aria-label="' + addres + '" aria-expanded="false" data-parent-id="' + insert + '" data-location-ids="' + locationsIds.join() + '" onclick="iai_set_location(this)" onkeydown="iai_location_key_down(event, () => iai_set_location(this))">' + addres + '</li>';

            }
            calendar_html += '</ul>';
          }
          calendar_html += '</ul>';
        }
        calendar_html += '</ul>';
      }
      calendar_html += '</ul>';

      return calendar_html;
    },

    iai_location_get_dictionaries = function () {
      var countries = {};
      var cities = {};
      var districts = {};
      var addresses = {};
      var tree = {};

      for (var locationId in iai_booking_location) {
        if (!iai_booking_location.hasOwnProperty(locationId)) {
          continue;
        }

        for (var key in iai_booking_location[locationId]) {
          if (!iai_booking_location[locationId].hasOwnProperty(key)) {
            continue;
          }

          if (key === 'street') {
            if (!addresses.hasOwnProperty(iai_booking_location[locationId][key])) {
              addresses[iai_booking_location[locationId][key]] = [];
            }
            addresses[iai_booking_location[locationId][key]].push(locationId);
          }

          if (key === 'city') {
            if (!cities.hasOwnProperty(iai_booking_location[locationId][key])) {
              cities[iai_booking_location[locationId][key]] = [];
            }
            cities[iai_booking_location[locationId][key]].push(locationId);
          }

          if (key === 'country') {
            if (!countries.hasOwnProperty(iai_booking_location[locationId][key][lang])) {
              countries[iai_booking_location[locationId][key][lang]] = [];
            }
            countries[iai_booking_location[locationId][key][lang]].push(locationId);
          }

          if (key === 'region') {
            if (iai_booking_location[locationId][key] == '') {
              iai_booking_location[locationId][key] = txt8;
            }
            if (!districts.hasOwnProperty(iai_booking_location[locationId][key])) {
              districts[iai_booking_location[locationId][key]] = [];
            }
            districts[iai_booking_location[locationId][key]].push(locationId);
          }
        }

        if (!tree.hasOwnProperty(iai_booking_location[locationId]['country'][lang])) {
          tree[iai_booking_location[locationId]['country'][lang]] = {};
        }
        if (!tree[iai_booking_location[locationId]['country'][lang]].hasOwnProperty(iai_booking_location[locationId]['city'])) {
          tree[iai_booking_location[locationId]['country'][lang]][iai_booking_location[locationId]['city']] = {};
        }

        if (!tree[iai_booking_location[locationId]['country'][lang]][iai_booking_location[locationId]['city']].hasOwnProperty(iai_booking_location[locationId]['region'])) {
          tree[iai_booking_location[locationId]['country'][lang]][iai_booking_location[locationId]['city']][iai_booking_location[locationId]['region']] = {};
        }

        if (!tree[iai_booking_location[locationId]['country'][lang]][iai_booking_location[locationId]['city']][iai_booking_location[locationId]['region']].hasOwnProperty(iai_booking_location[locationId]['street'])) {
          tree[iai_booking_location[locationId]['country'][lang]][iai_booking_location[locationId]['city']][iai_booking_location[locationId]['region']][iai_booking_location[locationId]['street']] = [];
        }
        tree[iai_booking_location[locationId]['country'][lang]][iai_booking_location[locationId]['city']][iai_booking_location[locationId]['region']][iai_booking_location[locationId]['street']].push(locationId);
      }

      //sortowanie w koleności alfabetycznej
      var n = {};
      for (var country in tree) {
        if (tree.hasOwnProperty(country)) {
          for (var city in tree[country]) {
            if (tree[country].hasOwnProperty(city)) {
              for (var region in tree[country][city]) {
                if (tree[country][city].hasOwnProperty(region)) {
                  n = {};
                  Object.keys(tree[country][city][region]).sort((a,b) => a.localeCompare(b)).forEach(function (v, i) {
                    n[v] = tree[country][city][region][v];
                  });
                  tree[country][city][region] = n;
                }
              }
              n = {};
              Object.keys(tree[country][city]).sort(function (a, b) {
                if (a == txt8) {
                  return 1;
                }
                if (b == txt8) {
                  return -1;
                }
                if (a > b) {
                  return 1;
                }
                if (a < b) {
                  return -1;
                }
                return 0;
              }).sort((a,b) => a.localeCompare(b)).forEach(function (v, i) {
                n[v] = tree[country][city][v];
              });
              tree[country][city] = n;
            }
          }
          n = {};
          Object.keys(tree[country]).sort((a,b) => a.localeCompare(b)).forEach(function (v, i) {
            n[v] = tree[country][v];
          });
          tree[country] = n;
        }
      }
      n = {};
      Object.keys(tree).sort((a,b) => a.localeCompare(b)).forEach(function (v, i) {
        n[v] = tree[v];
      });
      tree = n;

      return [countries, cities, addresses, districts, tree];
    },

    iai_location_append_container = function (insert, calendar_html) {
      var iailocation = document.createElement('div');
      iailocation.id = 'iailocation-container';
      iailocation.innerHTML = calendar_html;
      document.getElementById(insert).appendChild(iailocation);
    },

    iai_location_set_advanced_display = function () {
      if (Object.keys(iai_booking_location).length > 9) {
        iai_booking_search.locationAdvancedDisplay = true;
      } else {
        iai_booking_search.locationAdvancedDisplay = false;
      }
    },

    iai_location_selected = function () {
      iai_booking_search.locationSelected = {
        'country': 0,
        'city': 0,
        'district': 0,
        'addres': 0
      };

      iai_booking_search.locationSelectedName = {
        'country': 0,
        'city': 0,
        'district': 0,
        'addres': 0
      };

      iai_booking_search.locationSkip = {
        'country': 0,
        'city': 0,
        'district': 0,
        'addres': 0
      };
    },

    iai_location_advanced_display_logic = function () {
      var checkCountries = iai_location_check_countries('iailocation-countries');
      if (checkCountries == 1) {
        var checkCities = iai_location_check_cities('iailocation-cities');
        if (checkCities == 1) {
          var checkDistricts = iai_location_check_districts('iailocation-districts');
          if (checkDistricts == 1) {
            if (iai_booking_search.locationSelected.addres === 0) {
              iai_location_hide_under('iailocation-addresses');
            } else {
              iai_location_hide('iailocation-addresses');
            }
          } else {
            if (iai_booking_search.locationSelected.district === 0) {
              iai_location_hide_under('iailocation-districts');
            } else {
              iai_location_hide('iailocation-districts');

              iai_location_show_uder('iailocation-district', iai_booking_search.locationSelected.district, 'district');
              if (iai_booking_search.locationSelected.addres === 0) {
                iai_location_hide_under('iailocation-addresses');
              } else {
                iai_location_hide('iailocation-addresses');
              }
            }
          }
        } else {
          if (iai_booking_search.locationSelected.city === 0) {
            iai_location_hide_under('iailocation-cities');
          } else {
            iai_location_hide('iailocation-cities');

            iai_location_show_uder('iailocation-city', iai_booking_search.locationSelected.city, 'city');
            if (iai_booking_search.locationSelected.district === 0) {
              iai_location_hide_under('iailocation-districts');
            } else {
              iai_location_hide('iailocation-districts');

              iai_location_show_uder('iailocation-district', iai_booking_search.locationSelected.district, 'district');
              if (iai_booking_search.locationSelected.addres === 0) {
                iai_location_hide_under('iailocation-addresses');
              } else {
                iai_location_hide('iailocation-addresses');
              }
            }
          }
        }
      } else {
        if (iai_booking_search.locationSelected.country === 0) {
          iai_location_hide_under('iailocation-countries');
        } else {
          iai_location_hide('iailocation-countries');

          iai_location_show_uder('iailocation-country', iai_booking_search.locationSelected.country, 'country');
          if (iai_booking_search.locationSelected.city === 0) {
            iai_location_hide_under('iailocation-cities');
          } else {
            iai_location_hide('iailocation-cities');

            iai_location_show_uder('iailocation-city', iai_booking_search.locationSelected.city, 'city');
            if (iai_booking_search.locationSelected.district === 0) {
              iai_location_hide_under('iailocation-districts');
            } else {
              iai_location_hide('iailocation-districts');

              iai_location_show_uder('iailocation-district', iai_booking_search.locationSelected.district, 'district');
              if (iai_booking_search.locationSelected.addres === 0) {
                iai_location_hide_under('iailocation-addresses');
              } else {
                iai_location_hide('iailocation-addresses');
              }
            }
          }
        }
      }
    },

    iai_location_sample_display_logic = function () {
      var checkCountries = iai_location_check_countries('iailocation-countries');
      if (checkCountries == 1) {
        var checkCities = iai_location_check_cities('iailocation-cities');
        if (checkCities != 1) {
          iai_location_padding_cities('iailocation-cities');
        }

        var checkDistricts = iai_location_check_districts('iailocation-districts');
        if (checkDistricts != 1) {
          iai_location_padding_districts('iailocation-districts');
        }
      } else {
        iai_location_padding_countries('iailocation-countries');
      }
    },

    iai_location = function () {

      var insert = 'iai_location';
      iai_location_set_advanced_display();

      var dictionaries = iai_location_get_dictionaries();
      var calendar_html = iai_location_get_html(dictionaries, insert);

      if (!document.getElementById('iailocation-container')) {
        iai_location_append_container(insert, calendar_html);
      } else if (iai_booking_search.locationAdvancedDisplay) {
        document.getElementById('iailocation-container').innerHTML = calendar_html;
      }

      if (iai_booking_search.locationAdvancedDisplay) {
        if (!document.getElementById('iailocation-container')) {
          iai_location_append_container(insert, calendar_html);

        }
        iai_location_advanced_display_logic();
      } else {
        iai_location_sample_display_logic();
      }

      const iai_location_btn = document.getElementById('iai_location_btn');

      if (iai_booking_search.hideContainer == true) {
        document.getElementById('iailocation-container').style.display = 'block';
        iai_location_btn.setAttribute("aria-expanded", "true");
        iai_booking_search.hideContainer = false;
      } else {
        document.getElementById('iailocation-container').style.display = 'none';
        iai_location_btn.setAttribute("aria-expanded", "false");
        iai_booking_search.hideContainer = true;
      }

      var topCalendarPosition = (window.innerHeight + window.pageYOffset - document.getElementById(insert).getBoundingClientRect().top - document.getElementById(insert).clientHeight) - document.getElementById('iailocation-container').clientHeight;

      if (topCalendarPosition > 0) {
        document.getElementById('iailocation-container').style.top = '0px';
      } else {
        document.getElementById('iailocation-container').style.top = topCalendarPosition + 'px';
      }
    },

    iai_get_location_json = function () {
      if (showLocation && locationUrl && null == document.querySelector('script[src="' + locationUrl + '"]')) {
        var script = document.createElement('script');
        script.src = locationUrl + '?' + Date.now();

        document.getElementsByTagName('head')[0].appendChild(script);
      }
    },

    iai_validate_date = function (validateDate, greaterThan) {
      var validateDateSplit = validateDate.split('-');
      if (!validateDateSplit[0]) {
        if (validateDate.length == 0 && (greaterThan === null || greaterThan.length == 0)) {
          return true;
        }
        return false;
      }

      var date = new Date(validateDateSplit[0], validateDateSplit[1] - 1, validateDateSplit[2], 23, 59);
      if (greaterThan == null) {
        greaterThan = new Date();
      } else {
        var greaterThanSplit = greaterThan.split('-');
        greaterThan = new Date(greaterThanSplit[0], greaterThanSplit[1] - 1, greaterThanSplit[2]);
      }

      if (date < greaterThan) {
        return false;
      }

      return true;
    },
    iai_validate_natural_number = function (number) {
      number = number.toString();
      if (number.length == 0) {
        return true;
      }
      var n1 = Math.abs(number);
      var n2 = parseInt(number, 10);

      return !isNaN(n1) && n2 === n1 && n1.toString() === number && n2 > 0;
    }
  iai_errorClass = function (elementId, result) {
    if (result) {
      document.getElementById(elementId).classList.add('iaiError');
    } else {
      document.getElementById(elementId).className = document.getElementById(elementId).className.replace(/\biaiError\b/, '');
    }
  },
    iai_browser_submit = function (submit) {
      var validate = true;
      var dateFromElement = document.getElementById('iai_booking_date_from');
      var validateElement = iai_validate_date(dateFromElement.value, null);
      if (validateElement) {
        iai_errorClass('iai_booking_date_from', false);
        submit.setAttribute('data-start-date', dateFromElement.value);
      } else {
        iai_errorClass('iai_booking_date_from', true);
        submit.removeAttribute('data-start-date');
      }
      validate = validate && validateElement;

      var dateToElement = document.getElementById('iai_booking_date_to');
      validateElement = iai_validate_date(dateToElement.value, dateFromElement.value);
      if (validateElement) {
        iai_errorClass('iai_booking_date_to', false);
        submit.setAttribute('data-end-date', dateToElement.value);
      } else {
        iai_errorClass('iai_booking_date_to', true);
        submit.removeAttribute('data-end-date');
      }
      validate = validate && validateElement;

      if (dateFromElement.value == '' && dateToElement.value != '') {
        iai_errorClass('iai_booking_date_from', true);
        submit.removeAttribute('data-start-date');
        validate = false;
      }

      var personsElement = document.getElementById('iai_booking_persons');
      if (personsElement) {
        validateElement = iai_validate_natural_number(personsElement.value);
        if (validateElement) {
          iai_errorClass('iai_booking_persons', false);
          submit.setAttribute('data-persons-adult', personsElement.value);
        } else {
          iai_errorClass('iai_booking_persons', true);
          submit.removeAttribute('data-persons-adult');
        }
      }
      validate = validate && validateElement;

      var roomElement = document.getElementById('iai_booking_rooms');
      if (roomElement) {
        validateElement = iai_validate_natural_number(roomElement.value);
        if (validateElement) {
          iai_errorClass('iai_booking_rooms', false);
          submit.setAttribute('data-rooms', roomElement.value);
        } else {
          iai_errorClass('iai_booking_rooms', true);
          submit.removeAttribute('data-rooms');
        }
      }
      validate = validate && validateElement;

      var locationElement = document.getElementById('iai_booking_location');
      if (locationElement) {
        if (locationElement.getAttribute('data-location-ids')) {
          submit.setAttribute('data-location', locationElement.getAttribute('data-location-ids'));
        } else {
          submit.removeAttribute('data-location');
        }
      }

      var priceElement = document.getElementById('iai_booking_price');
      if (priceElement) {
        priceElement.getAttribute('price_type')
        ? submit.setAttribute('data-price_type', priceElement.getAttribute('price_type'))
        : submit.removeAttribute('data-price_type');

        priceElement.getAttribute('price_from')
        ? submit.setAttribute('data-price_from', priceElement.getAttribute('price_from'))
        : submit.removeAttribute('data-price_from');

        priceElement.getAttribute('price_to')
        ? submit.setAttribute('data-price_to', priceElement.getAttribute('price_to'))
        : submit.removeAttribute('data-price_to');
      }

      if (validate) {
        generateWidgetIdoSellBooking(submit);
      }
    },
    iai_get_form = function (formClass, formStyle) {
      if (typeof idosellbooking_is_new_domain_for_widget != 'undefined' && idosellbooking_is_new_domain_for_widget) {
        var actionDomain = 'https://engine' + clientId + '.idobooking.com';
      } else {
        var actionDomain = 'https://client' + clientId + '.idosell.com';
      }
      var form = '<form autocomplete="off" id="iai_book_form" class="' + formClass + '" style="' + formStyle + '" action="' + actionDomain + '/widget/index.php">';
      if (showLocation == '1') {
        form += '<div class="showlocation widget__option">'
          + '<label for="iai_booking_location" id="iai_booking_location_label">' + txt7 + '</label>'
          + '<input class="iai_widget_input" autocomplete="off" onclick="iai_location(\'iai_location\')" type="text" id="iai_booking_location" value="" readonly/>'
          + '<button id="iai_location_btn" class="iai_widget_btn" type="button" aria-label="' + txt7 + '" aria-expanded="false" aria-controls="iai_location" onkeydown="iai_location_key_down(event, () => iai_location(\'iai_location\'))"><span class="visuallyhidden">'+ txt7 +'</span></button>'
          + '<div id="iai_location"></div>'
          + '<i class="iaiicon-location"></i>'
          + '</div>';
      }
      form += '<div class="datefrom widget__option">'
        + '<label for="iai_booking_date_from">' + txt1 + '</label>'
        + `<button type="button" aria-label="${TXT.DataPoczatkuRezerwacji}" aria-expanded="false" onclick="this.nextSibling.click()"><i class="iaiicon-calendar"></i></button>`
        + '<input autocomplete="off" pattern="\\d{4}-\\d{1,2}-\\d{1,2}" type="text" name="dateFrom" id="iai_booking_date_from" value="" placeholder="' + txt4 + '"/>'
        + '<div style="position:relative;" id="iai_booking_data1"></div>'
        + '</div>'
        + '<div class="dateto widget__option">'
        + '<label for="iai_booking_date_to">' + txt2 + '</label>'
        + `<button type="button" aria-label="${TXT.DataKoncaRezerwacji}" aria-expanded="false" onclick="this.nextSibling.click()"><i class="iaiicon-calendar"></i></button>`
        + '<input autocomplete="off" pattern="\\d{4}-\\d{1,2}-\\d{1,2}" type="text" name="dateTo" id="iai_booking_date_to" value="" placeholder="' + txt4 + '"/>'
        + '<div style="position:relative;" id="iai_booking_data2"></div>'
        + '</div>';
      if (showPersons == '1') {
        const iaiSearch = document.querySelector('.iai-search');
        const maxpersonsinoffer = (iaiSearch !== null) ? parseFloat(document.querySelector('.iai-search').getAttribute('persons')) : null;

        form += '<div class="iai_input-small iai_margin-small widget__option" id="person_section">'
          + '<label for="iai_booking_persons">' + txt5 + '</label>'
          + '<input class="iai_widget_input" autocomplete="off" maxlength="2" pattern="\\d{1,2}" type="text" readonly="readonly"  onchange="iai_validate_search_inputs()" id="iai_booking_persons" value="2" title="podaj ilość osób." />'
          + '<button class="iai_widget_btn" type="button" aria-label="' + txt5 + '" aria-expanded="false" aria-controls="iai_persons_list" onkeydown="iai_location_key_down(event, () => togglePersonsList(event))"><span class="visuallyhidden">'+ txt5 +'</span></button>'  
          + '<ul id="iai_persons_list" class="persons_list">';
        if (maxpersonsinoffer !== null) {
          for (let i = 1; i <= maxpersonsinoffer; i++) {
            if (i === 8) {
              form += `<li tabindex="0" aria-label="${TXT.IloscOsobDoZakwaterowania}: ${i}+" onkeydown="iai_location_key_down(event, () => handlePersonSelection(event))" data-value="${i}">${i}+</li>`;
            } else if (i < 8) {
              form += `<li tabindex="0" aria-label="${TXT.IloscOsobDoZakwaterowania}: ${i}" onkeydown="iai_location_key_down(event, () => handlePersonSelection(event))" data-value="${i}">${i}</li>`;
            }
          }
        }
        form += '</ul>'
          + '<i class="iaiicon-users"></i>'
          + '</div>';
      }
      if (showRooms == '1') {
        form += '<div class="iai_input-small">'
          + '<label for="iai_booking_rooms">' + txt6 + '</label>'
          + '<input autocomplete="off" maxlength="2" pattern="\\d{1,2}" type="text" name="rooms" onchange="iai_validate_search_inputs()" id="iai_booking_rooms" value="" title="podaj ilość pokoi." />'
          + '<i class="iaiicon-' + icon + '"></i>'
          + '</div>'
      }
      if (showPrice == '1') {
        form += '<div class="showPrice widget__option">'
          + '<label for="iai_booking_price" onclick="iai_price()" id="iai_booking_price_label">' + txt9 + '<span></span></label>'
          + '<input autocomplete="off" type="text" id="iai_booking_price" value="" readonly/>'
          + '<i class="iaiicon-price"></i>'
          + '<button type="button" aria-label="' + txt9 + '" aria-expanded="false" aria-controls="iai_price" onkeydown="iai_location_key_down(event, () => iai_price())"><span class="visuallyhidden">'+ txt9 +'</span></button>'  
          + '</div>'
          + '<div id="iai_price"></div>';
      }
      form += '<div class="formbutton">'
        + '<button type="submit" language="' + lang + '" title="' + txt3 + '" onclick="iai_browser_submit(this); return false;">' + txt3 + '</button>'
        + '</div>'
        + '</form>';

      return form;
    },

    iai_location_bind_outside = function () {
      if (showLocation && !closeLocationBind) {
        document.body.addEventListener('click', function (e) {
          if (document.getElementById('iai_location')) {
            if (!(
              (e.target.tagName == 'LI' &&
                (
                  e.target.className == 'iailocation-country' ||
                  e.target.className == 'iailocation-city' ||
                  e.target.className == 'iailocation-district' ||
                  e.target.className == 'iailocation-addres'
                )
              ) || (
                e.target.tagName == 'INPUT' && e.target.getAttribute('id') == 'iai_booking_location'
              ) || (
                e.target.tagName == 'SPAN' && (e.target.className == 'iailocation-seleted-left' || e.target.className == 'iailocation-seleted-right')
              )
            )) {
              if (document.getElementById('iailocation-container'))
                document.getElementById('iailocation-container').style.display = 'none';
            }
          }
        });

        closeLocationBind = true;
      }
    },

    iai_get_location_json();
  iai_location_selected();
  iai_location_bind_outside();

  if (mode == 'veritical-left') {
    var html = '<div id="iai_book_se" class="iai_veritical">'
      + '<div class="iai_book_trigger"><span>' + txt0 + '</span><b><i class="iaiicon-calendar"></i></b></div>'
      + iai_get_form('iai_rotate270', '');
  } else if (mode == 'veritical-right') {
    var html = '<div id="iai_book_se" class="iai_veritical">'
      + iai_get_form('iai_rotate270', '')
      + '<div class="iai_book_trigger"><span>' + txt0 + '</span><b><i class="iaiicon-calendar"></i></b></div>';
  } else if (mode == 'frontpage') {
    var html = '<div id="iai_book_se" class="iai_frontpage">'
      + '<div class="iai_book_trigger"><span>' + txt0 + '</span><b><i class="iaiicon-calendar"></i></b></div>'
      + iai_get_form('', 'display: none;');
  } else {
    var html = '<div id="iai_book_se" class="iai_horizontal">' + iai_get_form('');
  }

  var elements = document.getElementsByClassName(wrapperId);
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = html;
  }

  var elements = document.getElementsByClassName('iai_book_trigger');
  if (document.getElementsByClassName('iai_frontpage').length) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].onclick = function () {
        if (this.nextSibling.style.display != 'block') {
          this.nextSibling.style.display = 'block';
        } else {
          this.nextSibling.style.display = 'none';
        }
      };
    }
  } else {
    for (var i = 0; i < elements.length; i++) {
      var onClickBookTriger = false;
      var animateLeft = function (obj, from, to, direction) {
        from = parseInt(from);
        to = parseInt(to);
        if (direction == 1) {
          if (from < to) {
            onClickBookTriger = false;
            return;
          }
          var box = obj;
          box.style.left = from + "px";
          setTimeout(function () {
            animateLeft(obj, from - 2, to, 1);
          }, 1)
        } else {
          if (from > to) {
            onClickBookTriger = false;
            return;
          }
          var box = obj;
          box.style.left = from + "px";
          setTimeout(function () {
            animateLeft(obj, from + 2, to, 0);
          }, 1)
        }
      }
      elements[i].onclick = function () {
        if (onClickBookTriger == false) {
          onClickBookTriger = true;
          var element = this.parentNode.parentNode;
          var elementStyle = window.getComputedStyle(element);
          var elementLeft = elementStyle.left.substring(0, elementStyle.left.length - 2);
          if (parseInt(elementLeft) < 0) {
            animateLeft(element, elementLeft, 0, 0);
          } else {
            animateLeft(element, elementLeft, -265, 1);
          }
        }
      }

      var elementsRight = document.getElementsByClassName('iai_veritical_right');
      for (var k = 0; k < elementsRight.length; k++) {
        var animateRight = function (obj, from, to, direction) {
          from = parseInt(from);
          to = parseInt(to);
          if (direction == 1) {
            if (from < to) {
              onClickBookTriger = false;
              return;
            }
            var box = obj;
            box.style.right = from + "px";
            setTimeout(function () {
              animateRight(obj, from - 2, to, 1);
            }, 1)
          } else {
            if (from > to) {
              onClickBookTriger = false;
              return;
            }
            var box = obj;
            box.style.right = from + "px";
            setTimeout(function () {
              animateRight(obj, from + 2, to, 0);
            }, 1)
          }
        }
        elements[i].onclick = function (e, el) {
          if (onClickBookTriger == false) {
            onClickBookTriger = true;
            var element = this.parentNode.parentNode;
            var elementStyle = window.getComputedStyle(element);
            var elementRight = elementStyle.right.substring(0, elementStyle.right.length - 2);
            if (parseInt(elementRight) < 0) {
              animateRight(element, elementRight, 0, 0);
            } else {
              animateRight(element, elementRight, -265, 1);
            }
          }
        }
      }
    }
  }
  iai_set_promotions();

};




//nowe sablony
var iai_validate_search_inputs = function (maxPersons, minPersons, rooms) {
  if (typeof maxPersons !== 'undefined' && typeof minPersons !== 'undefined') {
    var personsInput = document.getElementById('iai_booking_persons');
    if (maxPersons > 0 && Number(personsInput.value) > maxPersons) {
      personsInput.value = maxPersons;
    }
    if (Number(personsInput.value) < minPersons) {
      personsInput.value = minPersons;
    }
  }
  if (typeof rooms !== 'undefined') {
    var roomsInput = document.getElementById('iai_booking_rooms');
    if (Number(roomsInput.value) > rooms) {
      personsInput.value = rooms;
    }
  }
};

//stare szablony
var iai_validate_inputs = function (maxPersons, minPersons, rooms) {
  document.getElementById("iai_booking_persons").addEventListener("change", function () {
    if (maxPersons > 0 && Number(this.value) > maxPersons) {
      this.value = maxPersons;
    }
    if (Number(this.value) < minPersons) {
      this.value = minPersons;
    }
  });
  document.getElementById("iai_booking_rooms").addEventListener("change", function () {
    if (Number(this.value) > rooms) {
      this.value = rooms;
    }
  });
};

booking_init = {};
if (!booking_init) {
  var booking_init = {};
}
booking_init.load_widget = function (url) {
  window.open(url, '_blank');
}

document.addEventListener("DOMContentLoaded", () => {
  initBookingToggle();
});

function initBookingToggle() {
  const bookingPersons = document.getElementById("iai_booking_persons");
  const personsList = document.querySelector("ul.persons_list");

  if (!bookingPersons || !personsList) return;

  bookingPersons.addEventListener("click", togglePersonsList);
}

function togglePersonsList(event) {
  event.preventDefault(); // Zapobiega domyślnemu zachowaniu
  const personsList = document.querySelector("ul.persons_list");
  personsList.classList.toggle("visible");
  personsListBtn = document.querySelector('#person_section button');
  if(personsListBtn.getAttribute('aria-expanded') === 'false') {
    personsListBtn.setAttribute('aria-expanded', 'true');
  } else {
    personsListBtn.setAttribute('aria-expanded', 'false');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const personsList = document.querySelector("ul.persons_list");
  const bookingPersons = document.getElementById("iai_booking_persons");

  if (personsList && bookingPersons) {
    personsList.addEventListener("click", handlePersonSelection);
  }
});

function handlePersonSelection(event) {
  const listItem = event.target.closest("li"); // Sprawdza, czy kliknięto <li>
  if (!listItem) return; // Jeśli nie, zakończ funkcję

  const val = listItem.dataset.value;
  const bookingPersons = document.getElementById("iai_booking_persons");
  bookingPersons.value = val;
  
  const personsList = document.querySelector("ul.persons_list");
  togglePersonsList(event);//personsList.classList.toggle("visible"); 
  
  event.preventDefault(); // Zapobiega domyślnemu działaniu
}

let iai_set_promotions = function () {
  if(document.querySelector('.page-promotions') !== null) {
    const promoIds = [];
    document.querySelectorAll('.page-promotions .accommodation-buttons > a').forEach((el) => {
      promoIds.push(el.getAttribute('data-promotion'));
    })
    document.querySelector('#iai_book_form button[type="submit"]').setAttribute(`data-promotions`,`${promoIds.join(',')}`);
  }
};
var PriceFilter = function(opt) {
  const $that = this;

  /* domyślne wartości */
  /**
    * ustawua date początkową
    * @param {string} priceFrom - ustawiony zakres cen od
    * @param {string} priceTo - ustawiony zakres cen do
    * @param {number} priceMaxPersonForm - maksymalna cena od dla cen za osobę
    * @param {number} priceMaxPersonTo - maksymalna cena do dla cen za osobę
    * @param {number} priceMaxStayForm - maksymalna cena od dla cen za pobyt
    * @param {number} priceMaxStayTo - maksymalna cena do dla cen za pobyt
    * @param {string} priceType - cena za pobyt czy osobę: price_person , price_stay
    * @param {string} currency - ustawiona waluta
    * @param {string} wrapperId - id wrappera do którego dodawany jest filtr
    * @param {function} setFilter - callback po zastosowaniu filtra
    * @param {function} clearFilter - callback po wyczyszczeniu filtra
    * @param {function} startCall - callback po odpaleniu filtra
    * @param {function} closeCall - callback po zamknięciu filtra
  */
  const data = opt || {
    priceFrom: '0',
    priceTo: '1000+',
    priceMaxPersonForm: 0,
    priceMaxPersonTo: 1000,
    priceMaxStayForm: 0,
    priceMaxStayTo: 10000,
    priceType: "price_person",
    currency: 'zł',
    wrapperId: '#iai_price',
    setFilter: () => {},
    clearFilter: () => {},
    startCall: () => {},
    closeCall: () => {},
  }
  this.data = data;

  /* domyślne literały */
  this.txt = {
    'CenaZaOsobe': TXT.CenaZaOsobe || 'Cena za osobę',
    'CenaZaPobyt': TXT.CenaZaPobyt || 'Cena za pobyt',
    'Wyczysc': TXT.Wyczysc || 'Wyczyść',
    'Zastosuj': TXT.Zastosuj || 'Zastosuj',
    'Od': TXT.Od || 'Od',
    'Do': TXT.Do || 'Do',
  }


  /**
    * zwraca maksymalną kwotę filtra w zależności od typu
  */
  const getMaxPrice = () => {
    return data.priceType === 'price_person' ? data.priceMaxPersonTo : data.priceMaxStayTo;
  }

  /**
    * czy wybrana cena do jest taka sama jak maksymalna cena do
  */
  const priceIsMax = () => {
    return parseInt(data.priceTo) >= getMaxPrice() ? true : false;
  }

  /**
    * zwraca html filtra po cenie
  */
  const getHtml = () => {
    return html = `<div class="priceFilter">
      <div class="priceFilter__type">
        <a href="##" class="person ${data.priceType === 'price_person' ? 'active' : ''}">${this.txt.CenaZaOsobe}</a>
        <a href="##" class="stay ${data.priceType === 'price_stay' ? 'active' : ''}">${this.txt.CenaZaPobyt}</a>
      </div>
      <div class="priceFilter__inputs">
        <div class="priceFilter__input">
          <input type="text" value="${parseInt(data.priceFrom)}" class="from" aria-label="${this.txt.Od}"/>
          <span class="currency">${data.currency}</span>
        </div>
        <span>-</span>
        <div class="priceFilter__input">
          <input type="text" value="${data.priceTo}" class="to" aria-label="${this.txt.Do}"/>
          <span class="currency">${data.currency}</span>
        </div>
      </div>
      <div slider class="priceFilter__slider">
        <div>
          <div inverse-left style="width:70%;"></div>
          <div inverse-right style="width:70%;"></div>
          <div range style="left:0%;right:0%;"></div>
          <span thumb left style="left:0%;"></span>
          <span thumb right style="left:100%;"></span>
        </div>
        <input class="from" value="${data.priceFrom}" oninput="
        this.value=Math.min(this.value,this.parentNode.childNodes[5].value-10);
        let value = (this.value/parseInt(this.max))*100
        var children = this.parentNode.childNodes[1].childNodes;
        children[1].style.width=value+'%';
        children[5].style.left=value+'%';
        children[7].style.left=value+'%';" min="0" max="${getMaxPrice()}" step="10" type="range">
        <input class="to" value="${parseInt(data.priceTo)}" oninput="
        this.value=Math.max(this.value,this.parentNode.childNodes[3].value-(-10));
        let value = (this.value/parseInt(this.max))*100
        var children = this.parentNode.childNodes[1].childNodes;
        children[3].style.width=(100-value)+'%';
        children[5].style.right=(100-value)+'%';
        children[9].style.left=value+'%';" min="0" max="${getMaxPrice()}" step="10" type="range">
      </div>
      <div class="priceFilter__buttons">
        <a href="##" class="clear">${this.txt.Wyczysc}</a>
        <a href="##" class="btn submit">${this.txt.Zastosuj}</a>
      </div>
    </div>`;
  }

  /**
    * ustawia filtr w data.wrapperId
  */
  const setHtml = () => {
    data.wrapper = document.querySelector(data.wrapperId);
    data.wrapper.insertAdjacentHTML('afterbegin' , getHtml());
  }

  /* EVENTS */

  /**
    * obsługa suwaka z cenami
    * @param {object} element - aktualnie zmieniany input from/to
  */
  this.slider = (element) => {
      let parent = element.parentNode;
      let slides = parent.getElementsByTagName("input");
      let slide1 = parseInt( slides[0].value );
      let slide2 = parseInt( slides[1].value );

      if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }

      data.wrapper.querySelector('.priceFilter__inputs .from').value = slide1;
      this.inputChange(data.wrapper.querySelector('.priceFilter__inputs .from') , true);
      data.wrapper.querySelector('.priceFilter__inputs .to').value = slide2;
      this.inputChange(data.wrapper.querySelector('.priceFilter__inputs .to') , true);
  }

  /**
    * czyści ustawiony zakres cen, wywołuje callback data.clearFilter
  */
  this.clear = () => {
    data.priceFrom = 0;
    data.priceTo = getMaxPrice()+'+';
    this.close();
    this.start();
    data.clearFilter({
      priceFrom: data.priceFrom,
      priceTo: data.priceTo,
      priceType: data.priceType,
      infinityPriceTo: priceIsMax(),
    });
  }

  /**
    * przekazuje wybrany zakres w zakres cen w callback data.setFilter
    * @param {boolean} loadOffers - czy przeładować oferty
  */
  this.submit = (loadOffers) => {
    data.setFilter ? data.setFilter({
      priceFrom: data.priceFrom,
      priceTo: data.priceTo,
      priceType: data.priceType,
      infinityPriceTo: priceIsMax(),
      loadOffers: loadOffers || false,
    }) : '';
    this.close();
  }

  /**
    * change w inpucie z cenami
    * @param {object} element - aktualnie zmieniany input from/to
    * @param {boolean} triggerFromSLider - czy wywołyjemy po zmianie w suwaku
  */
  this.inputChange = (element , triggerFromSLider) => {
    const from = data.wrapper.querySelector('.priceFilter__input input.from');
    const to = data.wrapper.querySelector('.priceFilter__input input.to');
    const sliderFrom = data.wrapper.querySelector('.priceFilter__slider input.from');
    const sliderTo = data.wrapper.querySelector('.priceFilter__slider input.to');
    element.value = Math.abs(parseInt(element.value));
    if(element.classList.contains('to')) {
      if(isNaN(element.value)) {
        element.value = data.priceTo;
      }
      data.priceTo = element.value;
      if(priceIsMax()) {
        data.priceTo = `${getMaxPrice()} +`;
        element.value = data.priceTo;
      } else {
        data.priceTo = parseInt(data.priceTo);
        element.value = parseInt(data.priceTo);
      }
      if(!triggerFromSLider) {
        sliderTo.value = parseInt(parseInt(data.priceTo));
        sliderTo.dispatchEvent(new Event('input'))
      }
    } else if(element.classList.contains('from')) {
      if(isNaN(element.value)) {
        element.value = data.priceFrom;
      }
      if(parseInt(element.value) >= parseInt(to.value)) {
        element.value = parseInt(to.value) - 1;
      }
      data.priceFrom = element.value;
      if(!triggerFromSLider) {
        sliderFrom.value = parseInt(data.priceFrom)
        sliderFrom.dispatchEvent(new Event('input'));
      }
    }
  }

  /**
    * clik w zmianę typu cen person/stay
    * @param {object} element - kliknięcy element
  */
  this.priceType = (element) => {
    const personEL = data.wrapper.querySelector('.priceFilter__type .person');
    const stayEL = data.wrapper.querySelector('.priceFilter__type .stay');

    if(element.classList.contains('person')) {
      data.priceType = 'price_person';
      personEL.classList.add('active');
      stayEL.classList.remove('active');
    } else if(element.classList.contains('stay')) {
      data.priceType = 'price_stay';
      stayEL.classList.add('active')
      personEL.classList.remove('active');
    }
    this.clear();
  }

  /**
    * przypisuje eventy do elementów
  */
  const setEvents = () => {
    data.wrapper.querySelector('.priceFilter__buttons .submit').addEventListener('click' , () => {this.submit(true)});
    data.wrapper.querySelector('.priceFilter__buttons .clear').addEventListener('click' , this.clear);

    data.wrapper.querySelectorAll('.priceFilter__inputs input').forEach(el => {
      el.addEventListener('change' , function() {$that.inputChange(this , false)});
    });

    data.wrapper.querySelectorAll('.priceFilter__inputs input.to').forEach(el => {
      el.addEventListener('focus' , function() {
        this.value = parseInt(this.value);
      });
    });
    data.wrapper.querySelectorAll('.priceFilter__inputs input').forEach(el => {
      el.addEventListener('blur' , function() {$that.inputChange(this , false)});
    });

    data.wrapper.querySelectorAll('.priceFilter__type a').forEach(el => {
      el.addEventListener('click' , function() {$that.priceType(this)});
    });

   data.wrapper.querySelectorAll('.priceFilter__slider input').forEach(el => {
      el.addEventListener('input' , function() {$that.slider(this)});
    });
  }

  /* METHODS */
  /**
    * ustawia html w data.wrapperId oraz przypisuje eventy
  */
  this.start = () => {
    setHtml();
    setEvents();
    data.wrapper.querySelectorAll('.priceFilter__slider input').forEach(el => {
      el.oninput();
    });
    data.startCall ? data.startCall() : '';
  }

  /**
    * usuwa html
  */
  this.close = () => {
    data.wrapper ? data.wrapper.removeChild(data.wrapper.querySelector('.priceFilter')) : '';
    data.closeCall ? data.closeCall() : '';
  }

};

let setFilter = (data) => {
  document.querySelector('.showPrice').classList.add('active');
  if(data) {
    data.priceType ? document.querySelector('#iai_booking_price').setAttribute('price_type' , data.priceType) : '';
    data.priceFrom ? document.querySelector('#iai_booking_price').setAttribute('price_from' , data.priceFrom) : '';
    (data.priceTo && !data.infinityPriceTo) ? document.querySelector('#iai_booking_price').setAttribute('price_to' , data.priceTo) : '';
    const text = `(${data.priceFrom} - ${data.priceTo} ${currency}/${data.priceType==='price_person'?TXT.os||'os':TXT.pobyt||'pobyt'})`;
    document.querySelector('#iai_booking_price_label span').innerText = text;
  }
}

let clearFilter = (data) => {
    document.querySelector('.showPrice').classList.remove('active');
    document.querySelector('#iai_booking_price').removeAttribute('price_type');
    document.querySelector('#iai_booking_price').removeAttribute('price_from');
    document.querySelector('#iai_booking_price').removeAttribute('price_to');
    document.querySelector('#iai_booking_price_label span').innerText = '';
}

const priceFilter = new PriceFilter({
  priceFrom: '0',
  priceTo: '1000+',
  priceMaxPersonForm: 0,
  priceMaxPersonTo: 1000,
  priceMaxStayForm: 0,
  priceMaxStayTo: 10000,
  priceType: "price_person",
  currency: 'zł',
  activeFilter: false,
  wrapperId: '#iai_price',
  setFilter: (data) => {setFilter(data)},
  clearFilter: clearFilter,
});

let iai_price = function () {
  if (document.querySelector('.priceFilter')) {
    priceFilter.close();
  } else {
    priceFilter.start();
    document.querySelector('.persons_list').classList.remove('visible');
  }
};