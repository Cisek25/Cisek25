app_book.run(function () {

  app_book.vars.isdatapickerStatic = false;
  let callback = (entries) => {
    if(entries[0].isIntersecting && !app_book.vars.isdatapickerStatic) {
      if (app_book.datapickerStatic) {
        app_book.vars.isdatapickerStatic = true;
        app_book.datapickerStatic.init();
        app_book.datapickerStatic.picker.ui.classList.add('--static');
        app_book.datapickerStatic.picker.show();
        document.querySelector('#calendar-data').classList.remove('--skeleton');
        document.querySelector('#calendar-data').insertAdjacentElement('beforeend' , app_book.datapickerStatic.picker.ui)
      }
    }
  };

  app_book.vars.datapickerStaticObserver = new IntersectionObserver(callback);

}, 'all', '.calendar-data');
