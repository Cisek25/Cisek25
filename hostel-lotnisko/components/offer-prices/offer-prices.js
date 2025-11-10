function priceList() {
    var year;
    var years = [];
    $('.price-list .season-row_sub').each(function () {
        year = $(this).find('.season-cell_year').text();
        year = year.substring(0, 4);
        years.push(year);
        $(this).attr('data-year', year);
    })
    var results = [];
    var sorted_arr = years.slice().sort();
    for (var i = 0; i < years.length; i++) {
        if (sorted_arr[i + 1] !== sorted_arr[i]) {
            results.push(sorted_arr[i])
        }
    }
    if (results.length >= 1) {
        for (var i = 0; i < results.length; i++) {
            $('.price-list .season-row').append(`<div class="year-label label "><span class="visuallyhidden">${offerPriceTXT.CennikNaRok}: </span>` + results[i] + '</div><div class="seasons" data-year="' + results[i] + '" />');
        }
        $('.price-list .season-row_sub').each(function () {
            var _this = $(this);
            for (var i = 0; i < results.length; i++) {
                if (_this.data('year') == results[i]) {
                    _this.appendTo($('.seasons[data-year="' + results[i] + '"]'))
                }
            }
        })
    }
}

function toggleArrow() {
    $(".pricelist-slide").click(function () {
        $(this).siblings(".slide_elements").slideToggle(300);
        $(this).find('i').toggleClass('icon-arrow_big_down').toggleClass('icon-arrow_big_up');
    });

    $(".pricelist-slide").keydown(function (event) {
        if (event.originalEvent.code === "Enter" || event.originalEvent.code === "Space") {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            $(this).siblings(".slide_elements").slideToggle(300);
            $(this).find('i').toggleClass('icon-arrow_big_down').toggleClass('icon-arrow_big_up');
            console.log('this', this);
            const slide_element = this.closest('.seasons').querySelectorAll('.slide_elements')[0];
            if(slide_element) {
                console.log('slide_element', slide_element);
                slide_element.focus();
            }
        }
    });
}

function priceArrow(){  
    if ($('.slide_elements').length) {
        if ($('.price-list .seasons').length) {
            $('.price-list .seasons').append(`<div class="pricelist-slide" tabindex="0" aria-label="${offerPriceTXT.TerminyWSezonie}"><i class="icon-arrow_big_down" aria-hidden="true"></i></div>`);
        } else {
            $('.price-list .season-multi-row').append('<div class="pricelist-slide"><i class="icon-arrow_big_down" aria-hidden="true"></i></div>');
        }
    }
    $('.pricelist-slide').each(function () {
        if (!$(this).siblings('.slide_elements').length) {
            $(this).remove();
        }
    }) 
}

app_book.run(function slide4() {
    if (!$('.offer-prices .seasons').length) {
        priceList();
        $('.season-row_sub:nth-child(n+4)').addClass('slide_elements');
        $('.slide_elements').hide();
        priceArrow();
        toggleArrow();
    }
}, 4, 'body', true);

app_book.run(function slide23() {
    if (!$('.offer-prices .seasons').length) {
        priceList();
        $('.season-row_sub:nth-child(n+3)').addClass('slide_elements');
        $('.slide_elements').hide();
        priceArrow();
        toggleArrow();
    }
}, [2,3], 'body', true);


app_book.run(function slide1() {
    if (!$('.offer-prices .seasons').length) {
        priceList();
        $('.season-row_sub:nth-child(n+2)').addClass('slide_elements');
        $('.slide_elements').hide();
        priceArrow();
        toggleArrow();
    }
}, 1, 'body', true);
