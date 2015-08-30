function init() {

  // //project menu hover
  $('.projects-link, .projects-container').mouseenter(function() {
    $('.projects').removeClass('hidden');
  });
  $('.projects-link, .projects-container').mouseleave(function() {
    $('.projects').addClass('hidden');
  });







  // // //project menu hover
  // $('.projects-link, .projects-link-menu, .projects').mouseenter(function() {
  //   $('.projects-link-menu').removeClass('hidden');
  // });
  // $('.projects-link, .projects-link-menu, .projects').mouseleave(function() {
  //   $('.projects-link-menu').addClass('hidden');
  // });

  //images hover cockblock
  $('.hidethatshit').mouseenter(function() {
    $('.col2').addClass('zzz');
  });
  $('.hidethatshit').mouseleave(function() {
    $('.col2').removeClass('zzz');
  });

  // //images hover cockblock
  // $('.hidethatshit, .projects-link-menu, .projects').mouseenter(function() {
  //   $('.col2').addClass('zzz');
  // });
  // $('.hidethatshit, .projects-link-menu, .projects').mouseleave(function() {
  //   $('.col2').removeClass('zzz');
  // });

  //slides på forsiden

  // $('.projects-link-menu')
  //   .find('.project-image')
  //   .clone()
  //   .wrapAll("<div class='wrap'></div>")
  //   .appendTo('.about')
  //   .css({'display' : 'block', 'opacity': '1'})
  //
  // $('.about .project-image').wrapAll("<div class='slides'><div class='inner'></div></div>");
  // $('.inner').attr('data-timeout', '3000').tcycle();
  // //$('.inner').hide().attr('data-timeout', '3000').tcycle().fadeIn('fast');
  //
  // $('.project, .about, .ingress').mouseenter(function() {
  //   $('.slides').addClass('hidden');
  // });
  // $('.project, .about, .ingress').mouseleave(function() {
  //   $('.slides').removeClass('hidden');
  // });



  $('.gif').tcycle(); //gifshit



  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-4601435-1', 'auto');
    ga('send', 'pageview');


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




      // (function($) {
      //     $('.col1').addClass('stacking-transition');
      //     $//('li').first().addClass('stacking-transition');
      //     $('.col2').addClass('stacking-transition');
      //
      //     setTimeout(function () {
      //      $('.col1').removeClass('stacking-transition'); //then after all that go back to normal
      //      //$('li').first().removeClass('stacking-transition');
      //      $('.col2').removeClass('stacking-transition');
      //    }, 450);
      //
      // })(jQuery);




      //$('.col2').removeClass('bottom');

      //$('.col2').addClass('zzz');




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
