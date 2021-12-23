$(document).ready(function() {

    $(window).trigger('resize');
    $(window).trigger('scroll');
    
    $(window).scroll(function() {
        let shadow_drop = $(window).scrollTop() / 10;

        //$('#mainSlider').css({'filter': 'brightness(' + (100 - shadow_drop) + '%)'});

        if ($(window).scrollTop() >= $('#topFilter').outerHeight() - 40) {
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

/* 따라다니는 플로팅메뉴 */

$(window).scroll(function(event){
    if(jQuery(window).scrollTop() > jQuery("#mainContents").offset().top) {
    jQuery("#leftCateg").css("position", "fixed");
    jQuery("#leftCateg").css("top", "20px");
    }
    else if((jQuery(window).scrollTop() < jQuery("#mainContents").offset().top)) {
    jQuery("#leftCateg").css("position", "absolute");
    jQuery("#leftCateg").css("top", "0");
    }
    });

    $( document ).ready( function() {
        $( '.cate1 > li' ).click( function() {
          $( this ).toggleClass( 'cate_on' );
        } );
      } );
    