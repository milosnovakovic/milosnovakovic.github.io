$(document).ready(function () {
    $('.header .image-container').on('click', function () {
        $(this).parent().next().toggleClass('open');
    });

    $('.mobile-toggle').on('click', function () {
        $(this).parent().toggleClass('open');
    });
});

(function () {
    var toTopVisible = false;
    var ticking = false;
    var SHOW_AT = 120;
    var HIDE_AT = 80;

    function updateToTop() {
        var scroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        var shouldShow = scroll >= (toTopVisible ? HIDE_AT : SHOW_AT);
        if (shouldShow !== toTopVisible) {
            toTopVisible = shouldShow;
            $(".to-top").toggleClass("on", toTopVisible);
        }
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(updateToTop);
        }
    }

    $(window).on("scroll", onScroll);
})();

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