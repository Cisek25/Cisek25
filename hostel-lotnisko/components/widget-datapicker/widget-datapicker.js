import "../../components/widget-datapicker/datapicker/main.js";
import "../../components/widget-datapicker/datapicker/mobilefriendly.js";
import "../../components/widget-datapicker/datapicker/keyboardnav.js";
import "../../components/widget-datapicker/datapicker.js";


window.addEventListener('load', function iaiCalendar() {
  const options = {
    inputs: {
      from: document.querySelector('#iai_book_form input[name="dateFrom"]'),
      to: document.querySelector('#iai_book_form input[name="dateTo"]'),
    },
    date: {
      minDate: Date.now(),
      minDays: 2,
    },
    url: '/calendar',
    urlData: {
      beginDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}`,
      objectId: 0,
      promotionId: 0,
    },
    lang: document.querySelector('html').lang,
    onShowCall: () => {
      document.querySelector('body').classList.add('shadow');
      app_book.datapicker.pickerReload(app_book.datapicker.options.urlData.beginDate);
    },
    onHideCall: () => {
      const litepickerElement = document.querySelector('.litepicker');
      const dateToElement = document.querySelector('#iai_book_form input[name="dateTo"]');
      const dateFromElement = document.querySelector('#iai_book_form input[name="dateFrom"]');
      const accommodationReservation = document.querySelector('.accommodation-reservation');
      document.querySelector('body').classList.remove('shadow');

      if(dateToElement && isNaN(parseInt(dateToElement.value))) {
        dateToElement.value = '';
        dateFromElement.value = '';
      }
      if(accommodationReservation && isNaN(parseInt(accommodationReservation.getAttribute('data-start-date')))) {
        accommodationReservation.setAttribute('data-start-date' , '');
        accommodationReservation.setAttribute('data-end-date' , '');
      }
    },
    onSelectCall: (date1 , date2) => {
      const accommodationReservation = document.querySelector('.accommodation-reservation');
      date1 = app_book.datapicker.formatDate(app_book.datapicker.formatChange(date1) , 'yyyy-mm-dd');
      date2 = app_book.datapicker.formatDate(app_book.datapicker.formatChange(date2) , 'yyyy-mm-dd');
      if(accommodationReservation && !isNaN(parseInt(date1))) {
        accommodationReservation.setAttribute('data-start-date' , date1);
        accommodationReservation.setAttribute('data-end-date' , date2);
        generateWidgetIdoSellBooking(accommodationReservation);
      }
    },
    txt: {
      errorDate: TXT.WWybranymOkresieSaNiedostepneDaty,
      halfBegin: TXT.WTymDniuMoznaTylkoRozpoczacRezerwacje,
      halfEnd: TXT.WTymDniuMoznaTylkoZakonczycRezerwacje,
      nextMonth: TXT.NastepnyMiesiac,
      prevMonth: TXT.PoprzedniMiesiac,
    },
  };

  if($('.offerCalendar').length > 0) {
    options.urlData.objectId = options.urlData.objectId = $('.offerCalendar').data('object');
  }

  const staticPickerOptions = {
    onShowCall: () => {
      app_book.datapickerStatic.pickerReload(app_book.datapicker.options.urlData.beginDate);    
    },
    onHideCall: () => {},
    pickerOwnOptions: {},
  }

  app_book.datapicker = new CalendarBooking(options);
  app_book.datapickerStatic = new CalendarBooking({...options, ...staticPickerOptions});
  app_book.datapicker.init();
  if(app_book.vars.datapickerStaticObserver) {
    app_book.vars.datapickerStaticObserver.observe(document.querySelector('#calendar-data'));
  }
});