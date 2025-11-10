

app_book.run(function() {

if ($('.room_desc').height() > 200) {
    var readMore = $('.room_desc').attr('data-readMore');
    var showLess = $('.room_desc').attr('data-showLess');
    $('.room_desc').attr('data-height', $('.room_desc').outerHeight()).addClass('minified').append('<div class="lay_shadow"></div>').after('<div class="room_desc_btn"><a class="btn" data-alt="' + showLess + '">' + readMore + '</a></div>');
    $('.room_desc, .room_desc_btn').wrapAll('<div class="room_desc_wrapper"></div>');

    $('.room_desc_btn .btn').on('click', function () {
        var e = $(this);
        var txt = e.html();
        var alt_txt = e.attr('data-alt');
        $('.room_desc.minified').toggleClass('open');
        if ($('.room_desc.minified').hasClass('open')) {
            $('.room_desc.minified').css('max-height', parseFloat($('.room_desc.minified').attr('data-height')));
            $('.lay_shadow').css('top', parseFloat($('.room_desc.minified').attr('data-height')))
            setTimeout(function () {
                $('.lay_shadow').toggle();
                e.html(alt_txt);
                e.attr('data-alt', txt);
            }, 400);
        } else {
            $('.room_desc.minified').css('max-height', 200);
            $('.lay_shadow').toggle().css('top', 200);
            e.html(alt_txt);
            e.attr('data-alt', txt);
        }
    })
};
}, 'all', '.room_desc', true);