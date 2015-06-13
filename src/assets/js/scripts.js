$(document).scrollsnap({
        snaps: '.project-content > li',
        proximity: 500,
        duration: 80
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
