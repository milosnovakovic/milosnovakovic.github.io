$(document).ready(function () {
    $('.header .image-container').on('click', function () {
        $(this).parent().next().toggleClass('open');
    });

    $('.mobile-toggle').on('click', function () {
        $(this).parent().toggleClass('open');
    });
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