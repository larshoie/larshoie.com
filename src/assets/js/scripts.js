// function setHover() {
//   if ($('.project-list a.active').next().length) {
//       $('.project-list a.active').next().addClass('active').end().removeClass('active');
//   } else {
//       $('.project-list a.active').removeClass('active');
//       $('.project-list a:first-of-type').addClass('active');
//       //$('.project-list .project').first().addClass('active');
//   }
// }
//
// //setInterval(setHover, 1000);
// function initList_test() {
// //$('.project-list a.active').removeClass('active');
// var initList = setInterval(function(){ setHover();}, 3000) ;
//  $('.project-list, .ingress').mouseover(function(){
//     clearInterval(initList);
//     $('.project-list a.active').removeClass('active');
//  }).mouseout(function(){
//     initList = setInterval(function(){ setHover();}, 3000) ;
//  })
// }
//






function init() {





  //slides på forsiden
  $('.project-list')
    .find('.project-image')
    .clone()
    .wrapAll("<div class='wrap'></div>")
    .appendTo('.about')
    .css({'display' : 'block', 'opacity': '1'
  });
  $('.about .project-image').wrapAll("<div class='slides'><div class='inner'></div></div>");
  $('.inner').attr('data-timeout', '4000').tcycle();






  $('.gif').tcycle(); //gifshit






  (function($) {
    //$('.project-content:nth-last-child(2)').waypoint(function (direction) {
    $('.other-projects').waypoint(function (direction) {
      //$('.project-info').addClass('bottom');
      //console.log(this.element.id + ' hit' + direction);
      $('.project-info').toggleClass('bottom', direction === 'down');
      }, { offset: 'bottom-in-view'
    });
  })(jQuery);






  //   setInterval(scroll_to_next_screen, 10000);

  //   //WAYPOINTS STUFF -- _fluff.scss
  //   var waypoints = $('.other-projects').waypoint({
  //     //console.log('heyyyyyyyy!!!!');
  //     console.log(this.element.id + ' hit' + direction)
  //     //$('.project-info').toggleClass('bottom', direction === 'down');
  // })


  // var waypoints = $('img').waypoint(function(direction) {
  //   //console.log('hey' + ' hit' + direction)
  //   if (direction === 'down') {
  //     $('.ingress-project').removeClass('fade-up').addClass('fade-down');
  //   }
  //   if (direction === 'up') {
  //     $('.ingress-project').removeClass('fade-down').addClass('fade-up');
  //   }
  //   //$('.ingress-project').toggleClass('fade-down', direction === 'down');
  // })


  // var waypoints = $('li.other-projects').waypoint({
  //   handler: function() {
  //     console.log('Hit midpoint of my context')
  //   },
  //   context: 'ul.project-content',
  //   offset: '50%'
  // })


  // var waypoints = $('.other-projects').waypoint(function(direction) {
  //   console.log('heyyyyyyyy!!!!');
  //   offset: '50%'
  //   //console.log(this.element.id + ' hit' + direction)
  //   //$('.ingress-project').addClass('fade-down');
  //   //$('.ingress-project').toggleClass('fade-up', direction === 'up');
  //   //$('img:last-of-type').toggleClass('fade', direction === 'down');
  //   //console.log(this.element.id + ' hit' + direction)
  // })

  //var waypoints = $('img').waypoint(function(direction) {
  //  console.log(this.element.id + ' hit' + direction)
  //})


  //   $(window).scroll(function() {
  //     if(($(document).scrollTop() + window.innerHeight)>($(document).innerHeight() * 0.99)){
  //         //Bottom Reached
  //         //console.log('BOTTOM!!!');
  //         $('.project-info').addClass('bottom');
  //         //$('.project-info').css('pointer-events','none');
  //     }
  //     else {
  //         //console.log('NOT BOTTOM!!!');
  //         $('.project-info').removeClass('bottom');
  //         //$('.project-info').css('pointer-events','initial');
  //     }
  // });


  // scrollfadeshit
  $(window).bind('scroll', function(){

    var fadeStart=300,
        fadeUntil=500,
        //fading = $('.ingress-project, .project-header ~ *');
        fading = $('.ingress-project p');

      var offset = $(document).scrollTop(),
          opacity=0.03;
      if( offset<=fadeStart ){
          opacity=1;
      }else if( offset<=fadeUntil ){
          opacity=1-offset/fadeUntil;
      }
      fading.css('opacity',opacity);
  });








  // $(document).scrollsnap({
  //     snaps: '.item',
  //     proximity: 400,
  //     duration: 450,
  //     latency: 1000
  // });

  // $('ul').powerTip({
  //     followMouse: true,
  //     closeDelay: 9999,
  //     intentSensitivity:100000
  // });


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

} // end init shit





// go and init shit
init();




$(function(){
  'use strict';
  var options = {
    prefetch: true,
    cacheLength: 25,

    onStart: {
      duration: 0, // Duration of our animation
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



    onAfter: function($container, $newContent) {





      init(); // on ajax load, go and init that shit again




      (function($) {
          $('.ingress-project').addClass('stacking-transition');
          $('.item').first().addClass('stacking-transition');
          $('.project-info').addClass('stacking-transition');

          setTimeout(function () {
           $('.ingress-project').removeClass('stacking-transition'); //then after all that go back to normal
           $('.item').first().removeClass('stacking-transition');
           $('.project-info').removeClass('stacking-transition');
         }, 450);

      })(jQuery);




      $('.project-info').removeClass('bottom');




      // go back to square one on esc
      $(document).keydown(function(event) {
        var ch = event.which
          if (ch == 27) {
              smoothState.load('/');
          }
      });

    }




  },
  smoothState = $('#main').smoothState(options).data('smoothState');
});
