import "./side-map.less";
app_book.run(function () {
    $('#showGoogleMaps').click(function () {
        $('.offers_content').find('.offers_wrapper').before($('#modal-map-canvas'));
        $('.offers_content #modal-map-canvas').before($('#wide_view_maps'));
        $('#wide_view_maps').show();
        $('.directions').hide();
        $(window).scrollTop(0);
    });


    $('#wide_view_maps').click(function () {
        $('.directions').before($('#modal-map-canvas'));
        $('#modal-map-canvas').before($('#wide_view_maps'));
        $('#wide_view_maps').hide();
    });
}, [2, 3, 4], 'body', true);