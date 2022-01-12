$(document).ready(function() {

    $(window).trigger('resize');
    $(window).trigger('scroll');
    
    $(window).scroll(function() {
        let shadow_drop = $(window).scrollTop() / 10;

        $('#mainSlider').css({'filter': 'brightness(' + (100 - shadow_drop) + '%)'});

        if ($(window).scrollTop() >= $('#mainSlider').outerHeight() - 200) {
            $('#headRegular').addClass('over');
            //$('.topLogo').css('background','url(../rebircell/resources/common/images/products/brand_logo_rebircell_pink.png) no-repeat');
        } else {
            $('#headRegular').removeClass('over');
            //$('.topLogo').css('background','url(../rebircell/resources/common/images/products/brand_logo_rebircell.png) no-repeat');
        }
    });

    $('.search_open').click(function() {
        $('aside#frmSearch').addClass('on');
    });

    $('.search_close').click(function() {
        $('aside#frmSearch').removeClass('on');
    });

    $('.best_items').hover(function() {
        $(this).children('label').css("transform", "translateY(0)");
      }, function(){
        $(this).children('label').css("transform", "translateY(100%)");
      });
});


$(document).ready(function () {
    
});