$(document).ready(function () {
    $('.header .image-container').on('click', function () {
        $(this).parent().next().toggleClass('open');
    });

    $('.to-top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
    $('.mobile-toggle').on('click', function () {
        $(this).parent().toggleClass('open');
    });
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".to-top").addClass("on");
    } else {
        $(".to-top").removeClass("on");
    }
});

if (typeof $.fn.fancybox !== 'undefined') {
    $('[data-fancybox]').fancybox({
        buttons: [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'close'
        ],
        thumbs: {
            autoStart: true
        }
    });
}