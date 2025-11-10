/**
 * ustawia date początkową
 * @param {array} urlData - tablica z parametrami do wysłania żądania
 * @param {string} url - ścieżka do bramki
 * @param {object} date - minDate - minimalna data do zaznaczenia , minDays minimalny zakres zaznaczenia
 * @param {object} inputs - inputy from i to do przeładowania oferty/odpalenia widgetu
 * @param {string} lang - język w kalendarzu - biblioteka ma domyślne tłumazenia
 * @param {Function} onShowCall - callback po odpaleniu kalendarza
 * @param {Function} onHideCall - callback po zamknięciu kalendarza
 * @param {Function} onSelectCall - callback po wybraniu zakresu
 * @param {object} pickerOwnOptions - własne opcje
 */
window.CalendarBooking = function (options) {
  /* opcje */
  this.options = {
    urlData: options.urlData ? options.urlData : {
      beginDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}`,
      objectId: 0,
      promotionId: 0,
    },
    url: options.url ? options.url : '/widget2/?module=calendar',
    date: options.date ? options.date : {
      minDate: Date.now(),
      minDays: 2
    },
    inputs: options.inputs ? options.inputs : {
      from: '',
      to: ''
    },
    lang: options.lang ? options.lang : 'pol',
    panelType: options.panelType ? options.panelType : 'night',
    onShowCall: !!options.onShowCall ? options.onShowCall : () => {},
    onHideCall: !!options.onHideCall ? options.onHideCall : () => {},
    onSelectCall: !!options.onSelectCall ? options.onSelectCall : () => {},
    pickerOwnOptions: options.pickerOwnOptions ? options.pickerOwnOptions : {},
  };

  /* literały */
  this.txt = {
    errorDate: options.txt.errorDate || 'W wybranym okresie są niedostępne daty',
    halfBegin: options.txt.halfBegin || 'W tym dniu można tylko rozpocząć rezerwację',
    halfEnd: options.txt.halfEnd || 'W tym dniu można tylko zakończyć rezerwację',
    nextMonth: options.txt.nextMonth || 'Przejdź do następnego miesiąca',
    prevMonth: options.txt.prevMonth || 'Przejdź do poprzedniego miesiąca',
  };

  /* kody błędów */
  this.errorTxt = [{
    name: 'errorDate',
    txt: this.txt.errorDate
  }, ];

  /* deklaracje zmiennych */
  this.lockDays = [];
  this.halfBeginDays = [];
  this.halfBeginDaysOneMonth = [];
  this.halfEndDays = [];
  this.halfEndDaysOneMonth = [];
  this.canEndDays = [];
  this.data = {
    eventdays: {}
  };
  this.startDate = this.options.urlData.beginDate;
  this.mobilefriendly = false;
  this.currentMonth = 0;
  this.defaultStartDate = this.options.inputs.from.value;
  this.defaultEndDate = this.options.inputs.to.value;
  this.preselectStartDate = '';

  /**
   * włącza/wyłącza loader w kalendarzu
   * @param {boolean} onOff
   */
  this.setLoader = (onOff) => {
    onOff ? this.picker.ui.classList.add('--loader') : this.picker.ui.classList.remove('--loader');
  };

  /**
   * dodaje wrapper na loader
   * @param {object} ui wrapper kalendarza
   */
  this.setLoaderHtml = (ui) => {
    const html = '<div class="litepicker__loader"></div>';
    ui.querySelector('.container__main').insertAdjacentHTML('afterbegin', html);
  };

  /**
   * pokazuje informacje o błędzie, sterowane klasą, pozwala łatwo rozudować o kolejne typy
   * @param {string} type typ błędu
   */
  this.validate = (type) => {
    this.picker.ui.classList.add(type);
    setTimeout(() => {
      this.picker.ui.classList.remove(type);
    }, 3000);
  };

  /**
   * komunikat z błędem
   * @param {string} type typ błędu
   */
  this.setCommunicate = (type) => `<div class="litepicker__val --${type}">${this.txt[type]}</div>`;

  /**
   * dodaje wrapper na loader
   * @param {object} ui wrapper kalendarza
   */
  this.setCommunicates = (ui) => {
    let html = '';
    this.errorTxt.forEach((el) => {
      html += this.setCommunicate(el.name);
    });
    ui.querySelector('.container__main').insertAdjacentHTML('afterbegin', html);
  };

  /**
   * dodaje legendę w kalendarzu
   * @param {object} ui wrapper kalendarza
   */
  this.setCaption = (ui) => {
    const html = `<div class="litepicker__legend"><div class="legend__halfBegin">
      ${this.txt.halfBegin}
    </div><div class="legend__halfEnd">${this.txt.halfEnd}</div></div>`;
    ui.querySelector('.container__main').insertAdjacentHTML('afterend', html);
  };

  /**
   * dodaje klasy do dni kalendarza podczas renderowania
   * @param {array} array - tablica z datami
   * @param {object} item - element poszczególnego dnia z kalendarza
   * @param {string} className - klasa do dodania
   * @param {string} time - aktualny dzień podczas renderowania
   */
  function setClassOnRender(array, item, className, time) {
    array.forEach((el) => {
      (new Date(el).getTime() === time) ? item.classList.add(className): '';
    });
  }

    /**
   * dodaje atrybuty do dni kalendarza podczas renderowania
   * @param {object} item - element poszczególnego dnia z kalendarza
   * @param {string} attrName - atrybut do dodania
   * @param {string} attrValue - wartość atrybutu do dodania
   */
    function setAttributeOnRender(item, attrName, attrValue) {
      item.setAttribute(attrName, attrValue);
    }

  /**
   * formatuje datę do yyyy-mm-dd lub mm-dd-yyyy
   * @param {string} date - data do formatowania
   * @param {string} format - yyyy-mm-dd , mm-dd-yyyy , dd-mm-yyyy
   */
  function formatDate(date, format) {
    const formatDate = new Date(date);
    const dd = String(formatDate.getDate()).padStart(2, '0');
    const mm = String(formatDate.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = formatDate.getFullYear();
    if (format === 'yyyy-mm-dd') {
      return `${yyyy}-${mm}-${dd}`;
    } else if (format === 'mm-dd-yyyy') {
      return `${mm}-${dd}-${yyyy}`;
    } else if (format === 'dd-mm-yyyy') {
      return `${dd}-${mm}-${yyyy}`;
    } else {
      return `${mm}-${dd}-${yyyy}`;
    }
  }
  this.formatDate = formatDate;

  /**
   * formatuje datę na potrzeby firefox i safari które inaczej interpretuje Date()
   * @param {string} day - data do formatowania
   */
  const formatChange = (day) => {
    day = day.split('-');
    return `${day[2]}-${day[0]}-${day[1]}T00:00:00.0`; //firefox and safari need
  }
  this.formatChange = formatChange;

  /**
   * ustawua date początkową zgodną z formatten yyyy-mm
   * @param {object} fromDate - data początkowa
   */
  this.setStartDate = (fromDate) => {
    let date = fromDate || this.options.inputs.from.value;
    if (date !== '') {
      this.startDate = date;
      date = new Date(date);
      this.options.urlData.beginDate = `${date.getFullYear()}-${date.getMonth() + 1}`;
    }

  };

  /**
   * pobiera ostatni dzień kazdego pobranego miesiaca
   * @param {object} days - dni z bramki
  */
  this.getLastDayPerMonth = (days) => {
    if (!days) return {};
    let firstMonth = Object.keys(days)[0].split('-')[0];
    const firstMonthArray = [];
    const lastMonthArray = [];
    for (const el in days) {
      if (el.split('-')[0] === firstMonth) {
        firstMonthArray.push(days[el]);
      } else {
        lastMonthArray.push(days[el]);
      }
    }
    return {
      first: firstMonthArray[firstMonthArray.length-1],
      last: lastMonthArray[lastMonthArray.length-1],
    }
  }

  /**
   * optymalizacja ilości zapytań przy zmianie miesiąca
   */
  this.setDelay = {
    set: function customDelaySet(delay, call) {
      this.del();
      this.timeoutID = window.setTimeout(() => {
        call ? call() : '';
      }, delay);
    },
    del: function customDelayDel() {
      (typeof this.timeoutID === 'number') ? window.clearTimeout(this.timeoutID): delete this.timeoutID;
    },
  };

  /**
   * pobiera dane o kalendarzu
   * @param {object} startDate - data początkowa do pobrania z bramki
   */
  this.getData = async (startDate) => {
    const beginDate = startDate || this.options.urlData.beginDate;
    const objectId = this.options.urlData.objectId;
    const promotionId = this.options.urlData.promotionId;
    let beginMonth = parseInt(beginDate?.split('-')[1]);
    const prevMonth = beginMonth === 1 ? 12 : beginMonth - 1;
    let data = {
      beginDate,
    };

    if (objectId !== 0) {
      data.objectId = objectId;
    }
    if (promotionId !== 0) {
      data.promotionId = promotionId;
    }

    if (sessionStorage.getItem(`last_day${prevMonth}${objectId}${promotionId}`) != null) {
      this.lastDayPrevMonth = JSON.parse(sessionStorage.getItem(`last_day${prevMonth}${objectId}${promotionId}`));
    }
    if (sessionStorage.getItem(beginDate + objectId + promotionId) != null) {
      return JSON.parse(sessionStorage.getItem(beginDate + objectId + promotionId)).data;
    }

    try {
      const response = await fetch(this.options.url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });
      const dataJson = await response.json();
      sessionStorage.setItem(beginDate + objectId + promotionId, JSON.stringify(dataJson));
      const lastDayePerMonth = this.getLastDayPerMonth(dataJson?.data?.eventdays);
      sessionStorage.setItem(`last_day${beginMonth}${objectId}${promotionId}`, JSON.stringify(lastDayePerMonth?.first));
      return dataJson.data;
    } catch (error) {
      return false;
    }
  };

  /**
   * nadpisuje objekt ustawień kalendarza zgodnie z aktualnie pobranymi danymi
   */
  this.reloadOptions = () => {
    const defaultOptions = {
      element: this.options.inputs.from,
      elementEnd: this.options.inputs.to,
      firstDay: 1,
      minDays: this.options.date.minDays,
      minDate: this.options.date.minDate,
      singleMode: false,
      lang: this.options.lang,
      moveByOneMonth: true,
      numberOfMonths: 2,
      numberOfColumns: 2,
      autoApply: true,
      showTooltip: true,
      lockDays: this.setDisabledDate(this.data.eventdays),
      disallowLockDaysInRange: true,
      autoApply: true,
      scrollToDate: true,
      plugins: ['mobilefriendly', 'keyboardnav'],
      mobilefriendly: {
        breakpoint: 768,
      },
      keyboardnav: {
        inlineMode: true,
      },
      switchingMonths: 1,
    };
    this.pickerOptions = {...defaultOptions, ...this.options.pickerOwnOptions};
  };

  /**
   * przeładowuje dane i odpala picker z bibloteki litepicker.js
   */
  this.pickerStart = () => {
    this.reloadOptions();
    this.picker = new Litepicker(this.pickerOptions);
    this.setEvents();
  };

  /**
   * odświeża picker np. po zmianie miesiaca
   * @param {object} startDate - data początkowa do pobrania z bramki
   */
  this.pickerReload = async (startDate) => {
    if (startDate.dateInstance) {
      this.setStartDate(startDate.dateInstance);
    }
    this.data = await this.getData();
    this.picker.setLockDays(this.setDisabledDate(this.data.eventdays));
    this.picker.gotoDate(new Date(this.startDate).getTime(), 0);

    if (this.picker.getStartDate() != null) {
      this.canEndDays = [];
      this.setCanEndDate(this.preselectStartDate); // dni w których nie można zakończyć rezerwacji
      this.setTempLockDays();
    }
    this.setLoader(false);
  };

  /**
   * ustawia niedostępne daty oraz połówki
   * @param {object} days - dni z bramki
   */
  this.setDisabledDate = (days) => {
    this.lockDays = [];
    this.halfBeginDays = [];
    this.halfEndDays = [];
    let lastDayStatus = this.lastDayPrevMonth?.status || null;
    for (const el in days) {
      if (days[el].status === 'disabled') {
        this.lockDays.push(formatChange(el));
      }
      if (this.options.panelType === 'night') {
        if (lastDayStatus && lastDayStatus !== 'disabled' && days[el].status === 'disabled') {
          this.halfEndDays.push(formatChange(el));
        }
        if (lastDayStatus && lastDayStatus === 'disabled' && days[el].status !== 'disabled') {
          this.halfBeginDays.push(formatChange(el));
        }
      }
      lastDayStatus = days[el].status;
    }

    this.halfEndDays.forEach((halfEnd) => {
      this.lockDays.forEach((lock, i) => {
        halfEnd === lock ? this.lockDays.splice(i, 1) : '';
      });
    });
    return this.lockDays;
  };

  /**
   * lengthType - minimal ustawia minimalną długość zakresu
   * @param {object} formatDateString - pierwsza data z zakresu
   */
  const minimalLength = (formatDateString) => {
        this.picker.setOptions({
      minDays: this.data.eventdays[formatDateString].minLength + 1,
      maxDays: null,
    });
    this.picker.gotoDate(new Date(this.startDate).getTime(), 0);
  };

  /**
   * lengthType - exact określona długość zakresu
   * @param {object} formatDateString - pierwsza data z zakresu
   */
  const exactLength = (formatDateString) => { // określona
    this.picker.setOptions({
      minDays: this.data.eventdays[formatDateString].minLength + 1,
      maxDays: this.data.eventdays[formatDateString].minLength + 1,
    });
    this.picker.gotoDate(new Date(this.startDate).getTime(), 0);
  };

  /**
   * lengthType - range wielokrotność w zakresie
   * @param {object} formatDateString - pierwsza data z zakresu
   */
  const rangeLength = (formatDateString) => { // wielokrotność
    const days = this.data.eventdays;
    const {
      minLength
    } = days[formatDateString];

    const daysBefore = afterBeforeDays(formatDateString, true);
    const daysAfter = afterBeforeDays(formatDateString, false);
    const lockDaysPush = (array) => {
      array.forEach((el, i) => {
        const n = i + 1;
        if (n % minLength !== 0 && days[el].lengthType === 'range') {
          this.canEndDays.push(el);
        }
      });
    };
    lockDaysPush(daysBefore.reverse());
    lockDaysPush(daysAfter);
  };

  /**
   * zwraca dni przed lub po zaznaczonej dacie
   * @param {object} formatDateString - pierwsza data z zakresu
   * @param {boolean} beforeAfter - czy przed czy po zaznaczonej dacie
   */
  const afterBeforeDays = (formatDateString, beforeAfter) => {
    const date1 = new Date(formatDateString).getTime();
    const date2 = new Date(Object.keys(this.data.eventdays)[0]).getTime();
    const beforeDate = !this.data.eventdays[formatDateString] && date1 < date2;
    const afterDate = !this.data.eventdays[formatDateString] && date1 > date2;

    if ((beforeDate && beforeAfter) || (afterDate && !beforeAfter) ) {
      return [];
    }
    if ((beforeDate && !beforeAfter) || (afterDate && beforeAfter) ) {
      return Object.keys(this.data.eventdays);
    }

    return Object.keys(this.data.eventdays).filter((el) => {
      if (el !== formatDateString && beforeAfter) {
        return this.data.eventdays[el];
      }
      if (el === formatDateString) {
        beforeAfter = !beforeAfter;
      }
    });
  };

  /**
   * znajduje najbliższą możliwą datę startową
   * @param {array} array - tablica z dniami do zaznaczenia
   */
  const checkCloseDate = (array) => {
    let chcekInArray = true;
    let n = 0;
    array.filter((el, i) => {
      if (this.data.eventdays[el].canstart && this.data.eventdays[el].status === 'simple' && chcekInArray) {
        chcekInArray = false;
        n = i;
      }
    });
    return n;
  };

  /**
   * filtruje zaznaczoną datę po typie
   * @param {object} formatDateString - pierwsza data z zakresu
   */
  const filterDaysByType = (formatDateString) => { // wielokrotność
    const type = this.data.eventdays[formatDateString].lengthType;
    if (type === 'minimal') {
      minimalLength(formatDateString);
    } else if (type === 'exact') {
      exactLength(formatDateString);
    } else if (type === 'range') {
      rangeLength(formatDateString);
    }
  };

  /**
   * znajduje dni w których nie może być zakończona rezerwacja
   */
  this.setCanEndDate = (formatDateString) => {
    if (formatDateString) {
      const daysBefore = afterBeforeDays(formatDateString, true);
      const daysAfter = afterBeforeDays(formatDateString, false);
      const days = this.data.eventdays;
      daysAfter.forEach(el => {
        !days[el].canend ? this.canEndDays.push(el) : '';
      });
      daysBefore.forEach(el => {
        !days[el].canstart ? this.canEndDays.push(el) : '';
      });
    }
  };

  /**
   * znajduje najbliższą możliwą date rezerwacji
   * @param {object} formatDateString - pierwsza data z zakresu
   */
  this.setCanStartDate = (formatDateString) => {
    const daysBefore = afterBeforeDays(formatDateString, true);
    const daysAfter = afterBeforeDays(formatDateString, false);
    const closeBeforeDate = checkCloseDate(daysBefore.reverse());
    const closeAfterDate = checkCloseDate(daysAfter);
    if (closeBeforeDate <= closeAfterDate) {
      this.picker.clearSelection();
      $(`div[data-time="${new Date(formatChange(daysBefore[closeBeforeDate])).getTime()}"]`).click();
    } else if (closeAfterDate < closeBeforeDate) {
      this.picker.clearSelection();
      $(`div[data-time="${new Date(formatChange(daysAfter[closeAfterDate])).getTime()}"]`).click();
    }
  };

  /** 
   * ustawia tymczosowo nie dostępne daty po rozpoczęciu zaznaczania zakresu
   */
  this.setTempLockDays = () => {
    this.picker.setOptions({
      lockDaysFilter: (date1, date2, pickedDates) => {
        if (pickedDates.length === 1) { // pierwsze zaznaczenie
          return this.canEndDays.includes(formatDate(date1.dateInstance));
        }
        return false;
      },
    });
    this.picker.gotoDate(new Date(this.startDate).getTime(), 0);
  };

  /** 
   * usuwa tymczasowo niedostępne daty
   */
  this.resetTtempLockDays = () => {
    this.canEndDays = [];
    this.picker.ui.querySelectorAll('div.day-item').forEach((el) => {
      el.classList.remove('tempLockDay');
    });
    this.picker.setOptions({
      lockDaysFilter: null,
    });
    this.picker.gotoDate(new Date(this.startDate).getTime(), 0);
    this.picker.setLockDays(this.setDisabledDate(this.data.eventdays));
  };

  /* EVENTS */
  this.setEvents = () => {

    /**
     * otwarcie kalendarza
     */
    this.picker.on('show', () => {
      this.options.onShowCall()
      this.setDelay.set(350, () => {
        this.picker.ui.querySelector('[tabindex]').focus();
      });
    });

    /**
     * zamknięcie kalendarza
     */
    this.picker.on('hide', () => {
      this.resetTtempLockDays();
      if (this.options.inputs.from.value === '') {
        this.picker.setDateRange(
          new Date(this.defaultStartDate), new Date(this.defaultEndDate), true
        );
      }

      this.options.onHideCall();
      this.picker.options.elementEnd.focus();
    });

    /**
     * zmiana miesiaca
     */
    this.picker.on('change:month', (date) => {
      this.setLoader(true);
      this.setDelay.set(350, () => {
        this.pickerReload(date);
      });
      return false;
    });

    /**
     * zmiana miesiaca w wersji mobilnej
     */
    this.picker.on('mobilefriendly.before:show', (el) => {
      this.currentMonth = new Date(this.picker.calendars[0].dateInstance).getTime();
    });

    /**
     * zmiana miesiaca w wersji mobilnej
     */
    this.picker.on('mobilefriendly.show', (el) => {
      this.mobilefriendly = true;
      this.picker.options.allowRepick = false;
      this.options.onShowCall();
    });

    /**
     * dodanie elementów na start kalendarza
     */
    this.picker.on('render', (ui) => {
      this.setCommunicates(ui);
      this.setLoaderHtml(ui);
      this.halfBeginDaysOneMonth = [];
      this.halfEndDaysOneMonth = [];
      if (!this.mobilefriendly && (this.halfBeginDays.length > 0 || this.halfEndDays.length > 0)) {
        this.setCaption(ui);
      } else if (this.mobilefriendly) {
        this.halfBeginDays.forEach((el) => {
          if ((new Date(el).getMonth() + 1) == parseInt(this.data.month_left_name)) {
            this.halfBeginDaysOneMonth.push(el);
          }
        })
        this.halfEndDays.forEach((el) => {
          if ((new Date(el).getMonth() + 1) == parseInt(this.data.month_left_name)) {
            this.halfEndDaysOneMonth.push(el);
          }
        })
        if (this.halfBeginDaysOneMonth.length > 0 || this.halfEndDaysOneMonth.length > 0) {
          this.setCaption(ui);
        }
      }
      this.currentMonth = new Date(this.picker.calendars[0].dateInstance).getTime();

      const buttonsNext = ui.querySelectorAll('.button-next-month');
      const buttonsPrev = ui.querySelectorAll('.button-previous-month');
      buttonsNext.forEach((btn) => {
        btn.setAttribute('aria-label', app_book.datapicker.txt.nextMonth);
      });
      buttonsPrev.forEach((btn) => {
        btn.setAttribute('aria-label', app_book.datapicker.txt.prevMonth);
      });
    });

    /**
     * dodanie klas podczas renderowania dni w kalendarzu
     */
    this.picker.on('render:day', (day, date) => {
      setClassOnRender(this.halfBeginDays, day, 'halfBegin', new Date(date.dateInstance).getTime());
      setClassOnRender(this.halfEndDays, day, 'halfEnd', new Date(date.dateInstance).getTime());
      setClassOnRender(this.canEndDays, day, 'tempLockDays', new Date(date.dateInstance).getTime());
      setAttributeOnRender(day, 'aria-label', `${new Date(date.dateInstance).getDate()}.${new Date(date.dateInstance).getMonth() + 1}.${new Date(date.dateInstance).getFullYear()}`);

      if (day.querySelector('.day-close') === null) {
        const html = '<span class="day-close">X</span>';
        day.insertAdjacentHTML('afterbegin', html);
        day.querySelector('.day-close').addEventListener('click', () => {
          this.picker.clearSelection();
        });
      }
    });

    /**
     * błędny zakres dat
     */
    this.picker.on('error:range', () => {
      this.validate('errorDate');
    });

    /**
     * wyczyszczenie zakresu dat
     */
    this.picker.on('clear:selection', () => {
      this.resetTtempLockDays();
    });

    /**
     * usunięcie zaznaczenie po kliknięciu w pierwszą zaznaczoną datę
     */
    this.picker.on('before:click', (target) => {
      if (target.classList.contains('is-start-date')) {
        this.picker.clearSelection();
      }
    });

    /**
     * tooltip - hover na każde dzien
     */
    this.picker.on('tooltip', (tooltip, day) => {
      tooltip.innerText = '';
      document.querySelectorAll('.day-close').forEach(el => {
        el.classList.remove('--active')
      });
      if (day.querySelector('.day-close') && !this.mobilefriendly) {
        day.querySelector('.day-close').classList.add('--active');
      }
    });

    /**
     * zastosowanie wybranego zakresu
     */
    this.picker.on('selected', (date1, date2) => {
      // zmiana formatu zwracanych dat
      this.options.onSelectCall(formatDate(date1.dateInstance), formatDate(date2.dateInstance));
    });

    /**
     * rozboczęcie wybierania zakresu
     */
    this.picker.on('preselect', (date1, date2) => {
      if (date2 === undefined && date1 !== undefined) { // pierwsze zaznaczenie
        const formatDateString = formatDate(date1.dateInstance);
        this.preselectStartDate = formatDateString;
        // nie można zacząć w tym dniu rezerwacji
        if (!this.data.eventdays[formatDateString].canstart) {
          this.setCanStartDate(formatDateString);
          return false;
        }

        if (Object.keys(this.data.eventdays).includes(formatDateString)) { // data wybranego dnia
          this.canEndDays = [];
          filterDaysByType(formatDateString);
          this.setCanEndDate(formatDateString); // dni w króeych nie można zakończyć rezerwacji
          this.setTempLockDays();
        }
      } else if (date2 !== undefined && date1 !== undefined) {
        const halfBeginLength = this.picker.ui.querySelectorAll('.is-in-range.halfBegin');
        const halfEndLength = this.picker.ui.querySelectorAll('.is-in-range.halfEnd');
        if (halfBeginLength.length > 0 || halfEndLength.length > 0) {
          this.validate('errorDate');
          this.picker.clearSelection();
          this.picker.show();
          return false;
        }
      }
    });
  };

  /**
   * pierwsze wywołanie kalendarza
   */
  this.init = async () => {
    this.setStartDate();
    this.pickerStart();
    this.setLoader(true);
    this.data = await this.getData();
    this.setDelay.set(350, () => {
      this.pickerReload(this.options.urlData.beginDate);
    });
  };
};