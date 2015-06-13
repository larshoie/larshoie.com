$(document).scrollsnap({
    snaps: '.project-content > li',
    proximity: 500,
    duration: 80
});

// $(function() {
//     $('#main').smoothState();
// });


$(function(){
  'use strict';
  var options = {
    prefetch: true,
    cacheLength: 10,
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
    }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');
});

// jQuery(function($) {
//     var options = {
//       panelSelector: 'li',
//       onSnapStart: function(){},
//       onSnapFinish: function(){},
//       onActivate: function(){},
//       directionThreshold: 20,
//       slideSpeed: 100,
//       easing: 'linear',
//       offset: 0,
//       keyboardNavigation: {
//         enabled: true,
//         nextPanelKey: 40,
//         previousPanelKey: 38,
//         wrapAround: true
//       }
//     };
//
//     $('.project-content').panelSnap(options);
//   });
