//--------------------- REVEAL JS
    // Full list of configuration options available here:
    // https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
    controls: false,
    progress: true,
    history: true,
    center: true,

    mouseWheel: false,
    transition: 'slide',
    transitionSpeed: 'slow',
    backgroundTransition: 'slide',

    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'linear', // default/cube/page/concave/zoom/linear/fade/none



    // Optional libraries used to extend on reveal.js
    dependencies: [
    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
    { src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    ]
    });
//--------------------- REVEAL JS

//-------------------------------------- JS FACEBOOK FOLLOW
// JS FACEBOOX FOLLOW BTN (NOT WORKING)
    (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
//-------------------------------------- JS FACEBOOK FOLLOW

jQuery.noConflict();
(function($) { 
  $(function() {
    // --------------------------- RESPONSIVE: TOC BTN
        $('.toc-btn').click(function(){
        $('.toc-list ul').slideToggle('slow', function(){
        $(this).css('display') == 'none' ? $(this).removeClass('showNav').addClass('hideNav').removeAttr('style') : $(this).removeClass('hideNav').addClass('showNav').removeAttr('style');
        });
        })
    // --------------------------- RESPONSIVE: TOC BTN

    // --------------------- NAV TOP POPUP
        /* HOME NAV ABOUT OVERLAY*/
        // NAV ABOUT BTN 
        $(".about-btn").click(function(){
        $(".about-overlay").fadeIn();
        });

        // HIDE BTN
        $(".hide-btn").click(function(){
        $(".about-overlay").fadeOut();

        });

        // CLOSE BACKGROUND CLICK
        $('body').click(function() {
        $('.about-overlay').fadeOut('slow');
        });

        // CLOSE BACKGROUND CLICK EXCLUDE THESE
        $('.about-btn, .about').click(function(event){
        event.stopPropagation();
        });

        /* HOME NAV SUBSCRIBE OVERLAY*/
        // NAV SUBSCRIBE BTN 
        $(".subscribe-btn").click(function(){
        $(".subscribe-overlay").fadeIn();
        });

        // NAV HIDE SUBSCRIBE 
        $(".hide-btn").click(function(){
        $(".subscribe-overlay").fadeOut();

        });

        // CLOSE BACKGROUND CLICK
        $('body').click(function() {
        $('.subscribe-overlay').fadeOut('slow');
        });

        // CLOSE BACKGROUND CLICK EXCLUDE THESE
        $('.subscribe-btn, .about').click(function(event){
        event.stopPropagation();
        });
    // --------------------- NAV TOP POPUP

    //-------------------------------------- CYCLE
        if (document.getElementById('hello')) {
        document.getElementById('hello').innerHTML = 'Hello World - this was inserted using JavaScript';
        }

        function wheelMove(event,deltaY) {
        event.preventDefault();
        $('.slides').unbind('mousewheel', wheelMove);

        if (deltaY > 0) {
        $('.slides').cycle('next');
        }
        if (deltaY < 0) {
        $('.toc-home-box').cycle('prev');
        }
        }

        var oldDate = Date.now();

        $(document).ready(function(){
        $('.toc-home-box')
        .cycle({
        fx:     'scrollUp', 
        next:   '.navigate-right.enabled', 
        prev:   '.navigate-left',
        speed: 	1020,
        timeout: 0, 
        pager: 'nav',
        after: function(){
        interval = setTimeout(function(){
        $('.toc-home-box').bind('mousewheel', wheelMove);
        },1600);
        }
        });

        $('.toc-home-box').bind('mousewheel',wheelMove);
        });


        // KEYBOARD TOC 
        $(document.documentElement).keyup(function (e) {
        // RIGHT KEY NEXT
        if (e.keyCode == 39){        
        $('.toc-home-box').cycle('next');
        }

        //LEFT KEY PREV
        if (e.keyCode == 37){
        $('.toc-home-box').cycle('prev');
        }

        }); // /KEYBOARD TOC
    //-------------------------------------- CYCLE
  });
})(jQuery);