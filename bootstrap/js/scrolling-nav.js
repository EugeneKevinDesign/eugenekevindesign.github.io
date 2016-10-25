//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 765) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".pictureme .avatar").addClass("animated zoomIn");
        $(".pictureme .avatar").removeClass("hidden zoomOut");
        $(".pictureme span").addClass("animated fadeIn");
        $(".pictureme span").removeClass("hidden fadeOut");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".pictureme .avatar").removeClass("zoomIn");
        $(".pictureme .avatar").addClass("zoomOut");
        $(".pictureme span").removeClass("fadeIn");
        $(".pictureme span").addClass("fadeOut");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 700, 'easeInOutExpo');
        event.preventDefault();
    });
});
