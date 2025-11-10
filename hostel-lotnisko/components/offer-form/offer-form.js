
app_book.run(function () {
    $('a.to-offer-prices').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.offer-prices').offset().top - 150
        }, 1000);
        return false;
    });
    $('a.to-offer-prices').on('keydown', function (event) {
        if (event.code === "Enter" || event.code === "Space") {
            $('html, body').animate({
                scrollTop: $('.offer-prices').offset().top - 150
            }, 1000);
            $('.offer-prices').find('[tabindex]').first().focus();
            return false;
        }
    });
}, 'all', '.to-offer-prices');


app_book.run(function () {
    $('.offerCalendar').on('click' , function() {
        if (app_book.datapicker) {
            app_book.datapicker.picker.show();
        }
    })
}, 'all', '.offerCalendar');

