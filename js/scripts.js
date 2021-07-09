/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

var typed = new Typed('.typed', {
  strings: [
      "whoami<br/>" +
      "><span class='caret'>$</span> azizdhaouadi<br/> ^100" +
      "><span class='caret'>$</span> stat aziz.human<br/> ^100" +
      "><span class='caret'>$</span> about: I am your friendly neighborhood Digital Marketer.<br/> ^100" +
      "><span class='caret'>$</span> skills: SEO, SEM, Copywriting, Google Analytics and Co.<br/> ^100" +
      "><span class='caret'>$</span> job: Marketing Specialist at <a href='http://www.trafficjunky.com/'>TrafficJunky.</a><br/> ^100" +
      "><span class='caret'>$</span> interests: physics, software development, data analysis, and tennis.<br/> ^300" +
      "><span class='caret'>$</span> highlights:  <a href='https://vocal.media/01/augmented-and-virtual-reality-leveraging-and-monetizing-the-technologies'>Monetizing AR and VR</a>, <a href='https://www.isanet.org/Conferences/Toronto-2019'>Speaker at the ISA 2019 Convention.</a><br/>" +
      "><span class='caret'>$</span>"
      /*
      "><span class='caret'>$</span> <a href='/timeline'>timeline</a> <a href='http://www.github.com/crearo/'>github</a> <a href='http://in.linkedin.com/in/bhardwajrish/'>linkedin</a> <a href='http://bhardwajrish.blogspot.com/'>blog</a><br/>"*/
    ],
    showCursor: true,
    cursorChar: '_',
        autoInsertCss: true,
        typeSpeed: 15,
        startDelay: 50,
        loop: false,
        showCursor: false
  });
  $('.message form').hide()
