$(document).scrollsnap({
    snaps: '.item',
    proximity: 400,
    duration: 450,
    latency: 1000
});

function scroll_to_nearest_li(e, t) {
    "undefined" == typeof e && (e = $(window).scrollTop()), "undefined" == typeof t && (t = !1), $("li").each(function() {
        return e < 1 * $(window).height() / 3 ? ($("body, html").animate({scrollTop: 0}, 200), !1) : Math.abs($(this).offset().top - e) < $(window).height() / 2 && $(this).offset().top > e || Math.abs($(this).offset().top - e) < $(window).height() / 2 && $(this).offset().top < e ? (t ? $("body, html").scrollTop($(this).offset().top) : $("body, html").animate({scrollTop: $(this).offset().top}, 200), !1) : void 0
    })
}

function scroll_to_next_screen() {
    scroll_to_nearest_li($(window).scrollTop() + 1.1 * $(window).height())
}

function scroll_to_previous_screen() {
    scroll_to_nearest_li($(window).scrollTop() - 1.1 * $(window).height())
}

$(window).on("click", function(e) {
    if (!$(e.toElement).hasClass("project-info"))
        if ("up" == $(".control").attr("data-direction") || "dark-up" == $(".control").attr("data-direction")) {
            var t = e.pageY - $(window).height();
            scroll_to_nearest_li(t, !1)//, console.log("up", t)
        } else if ("down" == $(".control").attr("data-direction") || "dark-down" == $(".control").attr("data-direction")) {
            var t = e.pageY;
            scroll_to_nearest_li(t, !1)//, console.log("down", t)
        }
    });

$(window).on("mousemove", function(e) {
    // if ($(".contents").hasClass("active"))
    //     $("body").attr("data-cursor", "default");
    // else
    //if ($(e.target).hasClass("other-projects"))
    //    $(".control").attr("data-direction", "hei");
        if (e.pageY < $(window).height() / 2 || e.pageY > $(document).height() - $(window).height() / 2)
            $(".control").attr("data-direction", "meh");
        else if ($(e.target).hasClass("dark")) {
            var t = e.clientY;
            t > $(window).height() / 2 ? $(".control").attr("data-direction", "dark-down") : $(".control").attr("data-direction", "dark-up")
        } else {
            var t = e.clientY;
            t > $(window).height() / 2 ? $(".control").attr("data-direction", "down") : $(".control").attr("data-direction", "up")
        }

    });

$(document).keydown(function(e) {
    switch (e.which) {
        case 37:
            scroll_to_previous_screen();
            break;
        case 38:
            scroll_to_previous_screen(), e.preventDefault();
            break;
        case 39:
            scroll_to_next_screen();
            break;
        case 40:
            scroll_to_next_screen(), e.preventDefault();
            break;
        default:
            return
    }
});

//console.log('hey');

//viewport units buggyfill
// require('viewport-units-buggyfill').init();

$(function(){
  'use strict';
  var options = {
    prefetch: true,
    cacheLength: 20,
    onStart: {
      duration: 250, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        $container.addClass('is-exiting');
        // Restart your animation
        smoothState.restartCSSAnimations();
      }
    },

    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        $container.removeClass('is-exiting');
        // Inject the new content
        $container.html($newContent);
      }
    },


  },
  smoothState = $('#main').smoothState(options).data('smoothState');
});

//console.log('OK');
