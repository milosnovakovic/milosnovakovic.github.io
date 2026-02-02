$(document).ready(function () {
    $('.header .image-container').on('click', function () {
        $(this).parent().next().toggleClass('open');
    });

    $('.mobile-toggle').on('click', function () {
        $(this).parent().toggleClass('open');
    });
});

(function () {
    var toTop = document.querySelector(".to-top");
    if (!toTop) return;

    var sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText =
        "position:absolute;top:100px;left:0;width:1px;height:1px;pointer-events:none;visibility:hidden;z-index:-1;";
    document.body.appendChild(sentinel);

    var observer = new IntersectionObserver(
        function (entries) {
            var entry = entries[0];
            if (!entry) return;
            $(toTop).toggleClass("on", !entry.isIntersecting);
        },
        { root: null, rootMargin: "0px", threshold: 0 }
    );
    observer.observe(sentinel);
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