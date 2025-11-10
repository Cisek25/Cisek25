/* app_book */
window.app_book = {};
app_book.vars = {};
app_book.fn = {};
app_book.fnrun = {};
app_book.run = function (fun, mode, wrapper, ajax) {

    if ($.isArray(mode)) {
        for (var i in mode) {
            if (!app_book.fnrun[mode[i]]) app_book.fnrun[mode[i]] = [];
            app_book.fnrun[mode[i]].push({ w: wrapper, fn: fun, a: ajax });
        }
    } else {
        if (!app_book.fnrun[mode]) app_book.fnrun[mode] = [];
        app_book.fnrun[mode].push({ w: wrapper, fn: fun, a: ajax });
    }

}; // zbiera funkcje
app_book.runArr = function (arr, mode, ajax) {
    if (arr) {
        var i, z = 0
        for (i = 0, z = arr.length; i < z; i++) {
            var w = arr[i].w;
            var fn = arr[i].fn;
            var a = arr[i].a;

            if (ajax) {
                if (w) {
                    if ($(w).length && a) { 
                      fn();
                      console.log('mode:' + mode + '\tselector:'+ w + '\tname:' + fn.name);
                    };
                } else {
                    if (a) {
                        fn();
                        console.log('mode:' + mode + '  \tselector:'+ w + '\tname:' + fn.name);
                    }
                }
            } else {
                if (w) {
                    if ($(w).length) {
                       fn();
                       console.log('mode:' + mode + '\tselector:'+ w + '\tname:' + fn.name);
                       };
                } else {
                    fn();
                    console.log('mode:' + mode + '  \tselector:'+ w + '\tname:' + fn.name);
                }
            }
        }
    }
}; // odpala zebrane funkcje
app_book.runApp = function () {
    app_book.vars.view = $("#viewType").width();
    var tmpView = app_book.vars.view;

    app_book.runArr(app_book.fnrun['all'], 'all');

    if (!app_book.vars.view) return false;
    app_book.runArr(app_book.fnrun[app_book.vars.view], app_book.vars.view);

    $(window).off('resize.view');
    $(window).on('resize.view', function () {
        app_book.vars.view = $("#viewType").width();
        if (app_book.vars.view != tmpView) {
            tmpView = app_book.vars.view;
            app_book.runArr(app_book.fnrun[app_book.vars.view], app_book.vars.view);
        }
    });
}; // odpalana raz inicjalizuje caly mechanizm najlepiej odpalac w html na dole
