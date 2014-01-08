/*********************************************
DAYTRIPPER GLOBAL JS- No01
**********************************************/
   
	/* PRELOAD FADEIN */
        $(window).load(function() {
			//HOMEPAGE
			$("#masthead").delay(10).fadeIn();
			$(".direction, nav").delay(10).fadeIn();	
			$(".mast-img").delay(250).animate({left: 0 }, 700);
			$("#side-column-textbox").delay(250).fadeIn();$("#side-column-textbox, .direction, nav").delay(1050).fadeIn();	
			   
	
			// STORIES 
            $(".loader").delay(350).animate({left: -1200 }, 700).fadeOut('fast'); 
			
			//STORIES (NOT WORKING)
			$(".direction, nav").delay(10).fadeIn();	
			$(".loading-screen-slide-in").delay(250).animate({left: 0 }, 700);
		
        })
		
		
		

	/* NAV TOP RESPONSIVE */
		
		// NAV TOP RESPONSIVE BTN
		$('#stories_btn').click(function(){
			$('nav ul').slideToggle('slow', function(){
				$(this).css('display') == 'none' ? $(this).removeClass('showNav').addClass('hideNav').removeAttr('style') : $(this).removeClass('hideNav').addClass('showNav').removeAttr('style');
			});
		});
	
	
	
	/* ARROW HIDE HOMEPAGE*/
	
		//HOME PREV ARROW HIDE
		document.addEventListener('data-event-prev-home-remove', function(){
			$('#prev-home').fadeOut();
		   // $('#prev').css('opacity', '0.2');
		});
		
		//HOME PREV ARROW SHOW
		document.addEventListener('data-event-prev-home', function(){
			$('#prev-home').fadeIn();
		   // $('#prev').css('opacity', '0.2');
		});
		
		//NEXT ARROW HIDE
		document.addEventListener('data-event-next-home-remove', function(){
			$('#next').fadeOut();
		});
		
		//NEXT ARROW SHOW
		document.addEventListener('data-event-next-home', function(){
			$('#next').fadeIn();
		});
		
		
		
		
	/* ARROW CHANGE DATA- PREV ARTICLE + NEXT ARTICLE */
	
		//PREV ARROW CHANGE
		document.addEventListener('data-event-prev-article', function(){
			$('#prev-article').fadeIn();
			$('#prev-article').css('opacity', '0.2');
		});
		
		document.addEventListener('data-event-prev-article-remove', function(){
			$('#prev-article').fadeOut();
			$('#prev-article').css('opacity', '0.5');
		});

		
		//NEXT ARROW CHANGE
		document.addEventListener('data-event-next-article', function(){
			$('#next-article').animate({right: "13px"}, 1020);
		});
		
		document.addEventListener('data-event-next-article-remove', function(){
			$('#next-article').animate({right: "-51px"}, 1020);
		});
	


	/* HOBO CODE */
		
		// SIDEBAR HOBOCODE SLIDEDOWN 
		$('.sidebar-button-hobocode').toggle(function(){
			$('.sidebar-content-hobocode').animate({'width':'500'},500);	
			},function(){
				$('.sidebar-content-hobocode').animate({'width':'0'},500);
		});
		
		// SIDEBAR HOBOCODE CLOSE BTN
		$('.sidebar-button-hobocode').click(
			function (){
			$(this).toggleClass("sidebar-button-x");
		});
