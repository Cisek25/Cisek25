jQuery.fn.reverse = [].reverse;

const createTabs = (call) => {
  $('.tabs .tabs__item').each(function() {
      $(this).find($('.active')).removeClass('active');
      $('.tabs').after($('#'+$(this).attr('data_href')));
  });
  $('.tabs *').remove();
  tabsArray.forEach(el => {
    let tab = `<div class="tabs__item" id="${el.id}_mobile" data_href="${el.id}" tabindex="0" aria-label="${PrzejdzDo} ${(tabs[el.name]) ? tabs[el.name] : $(`#${el.id}`).find($('.headline__name')).text()}">
      <span>${(tabs[el.name]) ? tabs[el.name] : $(`#${el.id}`).find($('.headline__name')).text()}</span>
    </div>`;
    ($(`#${el.id}`).length > 0) ? $('.tabs').append(tab) : '';
  });
  typeof call != 'undefined' ? call() : '';
}

const createTabsEvents = () => {
    let first = true;
    $('.tabs .tabs__item').reverse().each(function() {
      $('.tabs').after($('#' + $(this).attr('data_href')));
    });

    $('.tabs .tabs__item').each(function() {
      $(this).off();
      $(this).on('click' , function() {
        $('.tabs .tabs__item').each(function() {
          $(this).removeClass('active');
          $('#' + $(this).attr('data_href')).removeClass('active');
        })
        first === false ? $("html, body").animate({ scrollTop: $('#' + $(this).attr('data_href')).offset().top - 150 }, 500) : '';
        $(this).addClass('active')
        $('#' + $(this).attr('data_href')).addClass('active');
        app_book.fn.tabsCallback ? app_book.fn.tabsCallback() : '';
      })

      $(this).on('keydown' , function(event) {
        if (event.code === "Enter" || event.code === "Space") {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          $('.tabs .tabs__item').each(function() {
            $(this).removeClass('active');
            $('#' + $(this).attr('data_href')).removeClass('active');
          })
          first === false ? $("html, body").animate({ scrollTop: $('#' + $(this).attr('data_href')).offset().top - 150 }, 500) : '';
          $(this).addClass('active')
          $('#' + $(this).attr('data_href')).addClass('active');
          $('#' + $(this).attr('data_href')).find('button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])').first().focus();
          app_book.fn.tabsCallback ? app_book.fn.tabsCallback() : '';
        }
      })

    });
    first = false;
}

const createTabsEventsMobile = () => {
    let first = true;
    $('.tabs .tabs__item').each(function() {
      $(this).append($('#' + $(this).attr('data_href')));
    });
  
    $('.tabs .tabs__item').each(function() {
      $(this).off();
      this.setAttribute('aria-expanded', 'false');
      this.setAttribute('aria-controls', this.getAttribute('data_href'));
      $(this).find('span').first().on('click' , function() {
        let $this = $(this).parent('.tabs__item');
        $('.tabs .tabs__item').each(function() {
          if($this.attr('id') != $(this).attr('id') && $(this).hasClass('active')) {
            this.setAttribute('aria-expanded', 'false');
            $(this).removeClass('active');
            $('#' + $(this).attr('data_href')).removeClass('active');
          }
        });
        first === false ? $("html, body").animate({ scrollTop: $('#' + $this.attr('data_href')).offset().top - 200 }, 500) : '';
        $('#' + $this.attr('data_href')).toggleClass('active');
        $this.toggleClass('active');
        $this[0].getAttribute('aria-expanded') === 'false' ? $this[0].setAttribute('aria-expanded', 'true') : $this[0].setAttribute('aria-expanded', 'false');
        app_book.fn.tabsCallback ? app_book.fn.tabsCallback() : '';
      })
      $(this).on('keydown' , function(event) {
        let $this = $(this);
        if (event.code === "Enter" || event.code === "Space") {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          $('.tabs .tabs__item').each(function() {
            if($this.attr('id') != $(this).attr('id') && $(this).hasClass('active')) {
              this.setAttribute('aria-expanded', 'false');
              $(this).removeClass('active');
              $('#' + $(this).attr('data_href')).removeClass('active');
            }
          });
          first === false ? $("html, body").animate({ scrollTop: $('#' + $this.attr('data_href')).offset().top - 200 }, 500) : '';
          $('#' + $this.attr('data_href')).toggleClass('active');
          $this.toggleClass('active');
          $this[0].getAttribute('aria-expanded') === 'false' ? $this[0].setAttribute('aria-expanded', 'true') : $this[0].setAttribute('aria-expanded', 'false');
          app_book.fn.tabsCallback ? app_book.fn.tabsCallback() : '';
        }
      })
    })
    first = false;
}

app_book.fn.fixedElement = function (element , classToAdd , call) {/* np '.elementClass' , np 'active' , callback(true/false) fn */
  const oldVal = $(element).offset().top;
  const obj = $(window)[0];
  const el = $(element);
  const nextElement = el.next();
  let scrollCheck = false;
  $(window).on('scroll.fixedElement' , function () {
    scrollCheck = true;
  });

  setInterval( function() {
    if (scrollCheck) {
        scrollCheck = false;
        if(obj.scrollY > (oldVal - 60)) {
            !el.hasClass(classToAdd) ? ( el.addClass(classToAdd) , $(nextElement).css('padding-top' , el.outerHeight(true)) ) : '';
            !!call ? call(true, obj.scrollY) : '';
        } else {
            el.hasClass(classToAdd) ? ( el.removeClass(classToAdd) , $(nextElement).css('padding-top' ,0 ) ) : '';
            !!call ? call(false, obj.scrollY) : '';
        }
    }
  }, 30 );

  if(obj.scrollY > (oldVal + el.height())) {
    !el.hasClass(classToAdd) ? el.addClass(classToAdd) : '';
    !!call ? call(true) : '';
  }
}

app_book.fn.fixedElementOff = function (element , classToAdd) {/* np '.elementClass' , np 'active' */
  const el = $(element);
  const nextElement = el.next();
  $(window).off('scroll.fixedElement');
  el.removeClass(classToAdd);
  $(nextElement).css('padding-top', 0);
  $('.tabs .tabs__item').removeClass('active');
  setTimeout(() => {
    $('.tabs .tabs__item').removeClass('active');
  }, 30);
  $('.tabs .tabs__item').each(function() {
    $('#' + $(this).attr('data_href')).removeClass('active');
  });
}

const activeTabs = (check , scrollY) => {/* check zwraca boolean czy widoczny jest pasek z tabs */
  if(check) {
    $('.tabs .tabs__item').each(function() {
      let oldVal = $('#' + $(this).attr('data_href')).offset().top;
      if(scrollY > (oldVal - 160)) {
        $('.tabs .tabs__item').each(function() {
          $(this).removeClass('active');
        })
        $(this).addClass('active');
      }
    });
  }
}

const tabsArray = [
  {id:'calendar-data',name:'custom_1'},
  {id:'room_data',name:'custom_2'},
  {id:'room_rules',name:'custom_3'},
  {id:'extra-options',name:'custom_4'},
  {id:'room_desc',name:'custom_5'},
  {id:'offer-prices',name:'custom_6'},
];

app_book.run(function() {
  createTabs(createTabsEvents);
  app_book.fn.fixedElement('.tabs', '--fixed' , activeTabs);
}, [3, 4] , '.tabs', true);

app_book.run(function() {
  app_book.fn.fixedElementOff('.tabs', '--fixed' , activeTabs);
  createTabs(createTabsEventsMobile);
}, [1, 2] , '.tabs', true);