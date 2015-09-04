function init() {

  // // //project menu hover
  // $('.projects-link, .projects-link-menu, .projects').mouseenter(function() {
  //   $('.projects-link-menu').removeClass('hidden');
  // });
  // $('.projects-link, .projects-link-menu, .projects').mouseleave(function() {
  //   $('.projects-link-menu').addClass('hidden');
  // });

  //images hover cockblock // trenger ikke etter 40% bilde-fix!!! :)
  // $('.hidethatshit').mouseenter(function() {
  //   $('.col2').addClass('zzz');
  // });
  // $('.hidethatshit').mouseleave(function() {
  //   $('.col2').removeClass('zzz');
  // });

  // //images hover cockblock
  // $('.hidethatshit, .projects-link-menu, .projects').mouseenter(function() {
  //   $('.col2').addClass('zzz');
  // });
  // $('.hidethatshit, .projects-link-menu, .projects').mouseleave(function() {
  //   $('.col2').removeClass('zzz');
  // });


  // function jump( _selector, _speed ){
  //
  //     _speed = parseInt(_speed, 10) === _speed ? _speed : 300;
  //
  //     $( _selector ).on('click', function(event){
  //         event.preventDefault();
  //         var url = $(this).attr('href'); //cache the url.
  //
  //         // Animate the jump
  //         $("html, body").animate({
  //             scrollTop: parseInt( $(url).offset().top ) - 50
  //         }, _speed);
  //
  //     });
  // }


  // //slides på forsiden

  // $('.mobil-nav')
  //   .find('img')
  //   //.move()
  //   .prependTo('.mobil-nav')
  //   .wrapAll("<div class='test'></div>")
  //   .css({'display' : 'block', 'opacity': '1'})
  //
  // $('.test').attr('data-timeout', '5000').tcycle();





  //coverbilde på mobil
    $('.images')
      .find('img')
      .first()
      .clone()
      .addClass('cover')
      .appendTo('header.title')



      if (window.innerWidth && window.innerWidth >= 960) {
          //project menu hover
          $('.projects-link, .projects-inner').mouseenter(function() {
            $('.projects').removeClass('hidden');
          });
          $('.projects-link, .projects-inner').mouseleave(function() {
            $('.projects').addClass('hidden');
          });
      }
      // else {
      //
      // }

      // jump( '.mobil-nav', 500);

      // if (window.innerWidth && window.innerWidth < 960) {
      //     //project menu hover
      //
      //     $('.projects-link, .projects-link-home').on('click', function(event) {
      //     //   smoothState.load('/');
      //         scrollTo = $('#mobil-nav');
      //     });
      //
      // }




      //project menu klikk for å fikse shit på mob.......
      // $('.projects-link').touchend(function() {
      //   smoothState.load('/');
      // });




// // mediaqueries i js
// // http://zerosixthree.se/detecting-media-queries-with-javascript/
// "use strict";var Z63=function(e,t){var n=function(){this.afterElement=window.getComputedStyle?window.getComputedStyle(document.body,":after"):!1,this.currentBreakpoint="",this.lastBreakpoint="",this.init()};return n.prototype={init:function(){var e=this;e.afterElement&&e._resizeListener()},_resizeListener:function(){var e=this;t(window).on("resize orientationchange load",function(){e.currentBreakpoint=e.afterElement.getPropertyValue("content").replace(/^["']|["']$/g,""),e.currentBreakpoint!==e.lastBreakpoint&&(t(window).trigger("breakpoint-change",e.currentBreakpoint),e.lastBreakpoint=e.currentBreakpoint)})}},e.mediaqueryListener=e.mediaqueryListener||new n,e}(Z63||{},jQuery);
//
//   $(window).on('breakpoint-change', function(e, breakpoint) {
//
//       if(breakpoint === 'mobil') {
//
//
//
//
//
//         // $('.about .project-image').wrapAll("<div class='slides'><div class='inner'></div></div>");
//         // $('.inner').attr('data-timeout', '3000').tcycle();
//         // //$('.inner').hide().attr('data-timeout', '3000').tcycle().fadeIn('fast');
//         //
//         // $('.project, .about, .ingress').mouseenter(function() {
//         //   $('.slides').addClass('hidden');
//         // });
//         // $('.project, .about, .ingress').mouseleave(function() {
//         //   $('.slides').removeClass('hidden');
//         // });
//
//
//       }
//
//       if(breakpoint === 'tablet') {
//           //
//       }
//
//
//
//
//       if(breakpoint === 'skjerm') {
//           //
//       }
//
//
//
//
//
//   });











  $('.gif').tcycle(); //gifshit




  // $('header')
  //   .find('.list-of-projects')
  //   .clone()
  //   .addClass('mobil-nav')
  //   //.removeClass('projects')
  //   //.removeClass('hidden')
  //   //.wrap("<div class='cover'></div>")
  //   .appendTo('.col2')




    /*global jQuery */
    /*!
    * Lettering.JS 0.7.0
    *
    * Copyright 2010, Dave Rupert http://daverupert.com
    * Released under the WTFPL license
    * http://sam.zoy.org/wtfpl/
    *
    * Thanks to Paul Irish - http://paulirish.com - for the feedback.
    *
    * Date: Mon Sep 20 17:14:00 2010 -0600
    */
    !function(t){function e(e,n,i,r){var a=e.text(),c=a.split(n),s="";c.length&&(t(c).each(function(t,e){s+='<span class="'+i+(t+1)+'" aria-hidden="true">'+e+"</span>"+r}),e.attr("aria-label",a).empty().append(s))}var n={init:function(){return this.each(function(){e(t(this),"","char","")})},words:function(){return this.each(function(){e(t(this)," ","word"," ")})},lines:function(){return this.each(function(){var n="eefec303079ad17405c889e092e105b0";e(t(this).children("br").replaceWith(n).end(),n,"line","")})}};t.fn.lettering=function(e){return e&&n[e]?n[e].apply(this,[].slice.call(arguments,1)):"letters"!==e&&e?(t.error("Method "+e+" does not exist on jQuery.lettering"),this):n.init.apply(this,[].slice.call(arguments,0))}}(jQuery);

    /*
     * CircleType 0.36
     * Peter Hrynkow
     * Copyright 2014, Licensed GPL & MIT
     *
    */
    $.fn.circleType=function(a){var c={dir:1,position:"relative"};return"function"!=typeof $.fn.lettering?(console.log("Lettering.js is required"),void 0):this.each(function(){a&&$.extend(c,a);var h,i,b=this,d=180/Math.PI,e=parseInt($(b).css("font-size"),10),f=parseInt($(b).css("line-height"),10)||e,g=b.innerHTML.replace(/^\s+|\s+$/g,"").replace(/\s/g,"&nbsp;");b.innerHTML=g,$(b).lettering(),b.style.position=c.position,h=b.getElementsByTagName("span"),i=Math.floor(h.length/2);var j=function(){var g,j,k,m,n,o,p,q,a=0,i=0;for(g=0;g<h.length;g++)a+=h[g].offsetWidth;for(j=a/Math.PI/2+f,c.fluid&&!c.fitText?c.radius=Math.max(b.offsetWidth/2,j):c.radius||(c.radius=j),k=-1===c.dir?"center "+(-c.radius+f)/e+"em":"center "+c.radius/e+"em",m=c.radius-f,g=0;g<h.length;g++)n=h[g],i+=n.offsetWidth/2/m*d,n.rot=i,i+=n.offsetWidth/2/m*d;for(g=0;g<h.length;g++)n=h[g],o=n.style,p=-i*c.dir/2+n.rot*c.dir,q="rotate("+p+"deg)",o.position="absolute",o.left="50%",o.marginLeft=-(n.offsetWidth/2)/e+"em",o.webkitTransform=q,o.MozTransform=q,o.OTransform=q,o.msTransform=q,o.transform=q,o.webkitTransformOrigin=k,o.MozTransformOrigin=k,o.OTransformOrigin=k,o.msTransformOrigin=k,o.transformOrigin=k,-1===c.dir&&(o.bottom=0);c.fitText&&("function"!=typeof $.fn.fitText?console.log("FitText.js is required when using the fitText option"):($(b).fitText(),$(window).resize(function(){l()}))),l(),"function"==typeof c.callback&&c.callback.apply(b)},k=function(a){var b=document.documentElement,c=a.getBoundingClientRect();return{top:c.top+window.pageYOffset-b.clientTop,left:c.left+window.pageXOffset-b.clientLeft,height:c.height}},l=function(){var d,a=k(h[i]),c=k(h[0]);d=a.top<c.top?c.top-a.top+c.height:a.top-c.top+c.height,b.style.height=d+"px"};c.fluid&&!c.fitText&&$(window).resize(function(){j()}),"complete"!==document.readyState?(b.style.visibility="hidden",$(window).load(function(){b.style.visibility="visible",j()})):j()})};

    //typo experiments
    //$('.Haandbryggeriet').find('h2').circleType({radius: 300, dir:-1});
    $('.haandbryggeriet').find('h2').circleType({fluid:true, dir:-1});
    //$('.design-is-everything').find('h2').circleType();




  // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  //   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  //   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  //   })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  //
  //   ga('create', 'UA-4601435-1', 'auto');
  //   ga('send', 'pageview');





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
