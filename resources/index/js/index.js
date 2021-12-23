$(document).ready(function() {

    $(window).trigger('resize');
    $(window).trigger('scroll');
    
    $(window).scroll(function() {
        let shadow_drop = $(window).scrollTop() / 10;

        $('#mainSlider').css({'filter': 'brightness(' + (100 - shadow_drop) + '%)'});

        if ($(window).scrollTop() >= $('#mainSlider').outerHeight() - 200) {
            $('#headRegular').addClass('over');
        } else {
            $('#headRegular').removeClass('over');
        }
    });

    $('.search_open').click(function() {
        $('aside#frmSearch').addClass('on');
    });

    $('.search_close').click(function() {
        $('aside#frmSearch').removeClass('on');
    });
});