 window.InfinityScroll = function (params) {
  /* opcje */
  this.params = params || {};
  const {
    offersWrapper,
    offersWrapperName,
    offersElementName,
    offersLastElement,
    offersLastElementName,
    callback,
  } = this.params;

  this.vars = {
    observeInited: false, // czy observer jest aktywny
    page: 1,
    numberOfPages: 1,
    url: offersWrapper.getAttribute('data-url'),
    loadOffers: false, // czy strona jest aktualnie pobierana
    loadedPage: 1, // trzyma informację o ostatniej doładowanej stronie
  };

  /**
   * Aktualizuje parametry doczytywania (aktualna strona paginacji)
   * @param {object} element - wrapper listy ofert
  */
  this.updateParams = (element) => {
    this.vars.observeInited = false;
    this.vars.page = parseInt(element.getAttribute('data-page'));
    this.vars.numberOfPages = parseInt(element.getAttribute('data-numberOfPages'));
  }

  this.setLoader = (onOff) => {
    onOff ? offersWrapper.classList.add('--loader') : offersWrapper.classList.remove('--loader');
  }

  /* Pobranie ofert z następnej strony */
  this.fetchNextPage = async () => {
    const linkToNextPage = `${this.vars.url}/page/${this.vars.page + 1}`;
    if (this.vars.page < this.vars.numberOfPages && !this.vars.loadOffers && this.vars.page + 1 > this.vars.loadedPage) {
      this.vars.loadedPage = this.vars.page + 1;

      this.vars.loadOffers = true;
      this.setLoader(true);
      try {
        const response = await fetch(linkToNextPage);
        const dataJson = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(dataJson, 'text/html');
        // Odpalenie funkcji, która appenduje oferty
        this.updateDom(doc);
        this.setLoader(false);
        this.vars.loadOffers = false;
        callback ? callback() : '';
      } catch (error) {
        return false;
      }
    }
    return true;
  };

  /**
   * Aktualizacja ofert
   * @param {object} nextPageHtml - struktura nastęnej strony
   */
  this.updateDom = (nextPageHtml) => {
    nextPageHtml.querySelectorAll(`${offersWrapperName} ${offersElementName}`).forEach((el) => {
      offersWrapper.appendChild(el);
    });
    app_book.fn.lazyLoad ? app_book.fn.lazyLoad.update() : '';

    this.lastProductInView.observe(document.querySelector(offersLastElementName));
    this.updateParams(nextPageHtml.querySelector(offersWrapperName));
  };

  this.scrollEvent = () => {
    if (!this.vars.observeInited && offersLastElement) {
      this.lastProductInView.observe(document.querySelector(offersLastElementName));
      this.vars.observeInited = true;
    }
  };
  
  /* Odpalenie sprawdzania, czy widoczna jest ostatnia oferta */
  this.initEvents = () => {
    window.addEventListener('scroll', this.scrollEvent);
    return false;
  };

  /* Sprawdzenie, czy widoczny jest ostatnia oferta */
  this.lastProductInView = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.fetchNextPage();
        this.lastProductInView.unobserve(entry.target);
      }
    });
  });

  this.init = async () => {
    this.updateParams(offersWrapper);
    this.initEvents();
  };
};


app_book.run(function navsearch() {
    
  app_book.vars.infinityScroll = new InfinityScroll({
    offersWrapper: document.querySelector('.offers_wrapper'),
    offersWrapperName: '.offers_wrapper',
    offersElement: document.querySelector('.offers_wrapper .offers-container'),
    offersElementName:'.offers-container',
    offersLastElement: document.querySelector('.offers_wrapper .offers-container:last-child'),
    offersLastElementName:'.offers-container:last-child',
    callback: () => {},
  });
  
  app_book.vars.infinityScroll.init();

}, "all", ".offers_wrapper");