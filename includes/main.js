function openNav() {
		$("#mobileSidenav").css({'width':"250px"});
		$('#sidenav-toggle').addClass('closebtn').attr('onclick','closeNav()');
	}

	function closeNav() {
		$("#mobileSidenav").css({'width':"0px"});
		$('#sidenav-toggle').removeClass('closebtn').attr('onclick','openNav()');
	}
	function runLoader(){
		$(".header").append("<div class='glitch-window'></div>");
		$( "h1.glitched" ).clone().appendTo( ".glitch-window" );
		$('.s1').removeClass('hidden');
		setTimeout(function (){
			$('.s2').removeClass('hidden');
		},500);
		setTimeout(function (){
			$('.s3').removeClass('hidden');
		},1000);
		setTimeout(function (){
			$('.s4').removeClass('hidden');
		},1500);
		setTimeout(function (){
			$('.header').addClass('hidden');
			$('.loader').css({'display':'block'});
			$('.loader').css({'animation': 'flyOut 3s ease-in-out forwards'});
			$('.overlay').fadeOut(3000, function (){
				$('.content-displayed').fadeIn(1000);
			});
		},3000);
	}
	
	/* Music */
	var audio = new Audio("songs/music0.mp3");
	var playable = audio.play();
	audio.loop = true;
	if(playable !== undefined){
		playable.then( _ => {
			//playable
		}).catch(error =>{
			$('.playbtn i').removeClass('fa-pause');
			$('.playbtn i').addClass('fa-play');
			$('.music-controls').on("touchstart",function (){
				if($(this).css('right') === "10px"){
					$(this).css({'right':'-140px'});
				}else{
					$(this).css({'right':'10px'});
				}
			});
		});
	}
	$('.playbtn').click(function (){
		if(!audio.paused){
			audio.pause();
			$('.playbtn i').removeClass('fa-pause');
			$('.playbtn i').addClass('fa-play');
		}else{
			audio.play();
			$('.playbtn i').removeClass('fa-play');
			$('.playbtn i').addClass('fa-pause');
		}
	});
	
	function pollAudioTime(){
		$('.filler').css({'width': ((audio.currentTime*100/audio.duration))+'px'});
		setTimeout(pollAudioTime, 500);
	}
	
	pollAudioTime();
	/* Utility Functions */
	function syncTimer(){
		var countDownDate = new Date("March 21, 2018 00:00:00").getTime(); //Advaitam 4.0 Date
		var timer = setInterval(function() {
		  var now = new Date().getTime();
		  var distance = countDownDate - now; //time left before Advaitam is live
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		  if(days < 1){
		  // Display the result in the element with id="demo"
			$(".big-timer").html("<span class='num'>" + hours + "</span> hrs <span class='num'>" + minutes + "</span> mins <span class='num'>" + seconds + "</span> secs"); //when < 1 day left
		  }else{
			$(".big-timer").html("<span class='num'>" + days + "</span> days <span class='num'>" + hours + "</span> hrs <span class='num'>" + minutes + "</span> mins"); //when > 1 days left
		  }
		  // If the count down is finished, write some text 
		  if (distance < 0) {
			clearInterval(x);
			$(".big-timer").html("ADVAITAM 4.0 IS LIVE"); //when Advaitam 4.0 is live
		  }
		}, 1000);
	}
	function initPageView(){
        
		/* Define ScrollMagic Controller */
		ctrl = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});
		/* Cache selectors to all animated components */
		
		var wh = window.innerHeight,
			$home = $('#home'),
			$about = $('#about'),
            $aboutHeader = $('#about > .fa'),
            $aboutBody = $('#about > p, #about > h3'),
			$cultural = $('#cultural'),
            $culturalHeader = $('#cultural > .fa-custom'),
            $culturalBody = $('#cultural > p, #cultural > h3'),
			$overview = $('#overview'),
			$quiz = $('#quiz'),
            $quizHeader = $('#quiz > .fa'),
            $quizBody = $('#quiz > h3, #quiz p'),
			$epi = $('#epilogue');
		
		/* Specify Timeline attributes */
		var timeline = new TimelineMax();
		timeline
		.to($home, 8, {yPercent: -100, autoAlpha: 0, ease: Power4.easeOut});
        if($(window).innerWidth() < 767){
            timeline
            .fromTo($aboutHeader, 10, {autoAlpha: 0}, {autoAlpha: 1})
            .to($aboutHeader, 10, {xPercent: -20, autoAlpha: 0})
            .fromTo($aboutBody, 10, {yPercent: 20, autoAlpha: 0, scale: 0.8}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut})
            .to($aboutBody, 10, {xPercent: -20, autoAlpha: 0})
            .fromTo($culturalHeader, 8, {autoAlpha: 0}, {autoAlpha: 1}, '+=0.3', '0')
            .to($culturalHeader, 8, {xPercent: -20, autoAlpha: 0})
            .fromTo($culturalBody, 8, {autoAlpha: 0, scale: 0.8}, {autoAlpha: 1, scale: 1, ease: Cubic.easeOut})
            .to($culturalBody, 8, {xPercent: -20, autoAlpha: 0});
        }else{
            timeline
            .fromTo($about, 10, {yPercent: 20, autoAlpha: 0, scale: 0.8}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut}, '0')
            .to($about, 10, {xPercent: -20, autoAlpha: 0})
            .fromTo($cultural, 8, {yPercent: -20, autoAlpha: 0, scale: 0.8}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Cubic.easeOut})
            .to($cultural, 8, {xPercent: -20, autoAlpha: 0});
        }
        timeline
		.from($overview, 8, {autoAlpha: 0}, '-=0.1','0')
		.fromTo($overview.find(".progress .progress-right .progress-bar"),5,
		{
			rotation:"0"
		},
		{
			rotation:"180"
		},"-=8")
		.fromTo($overview.find(".progress .progress-left .progress-bar"),5,
		{
			rotation:"0"
		},
		{
			rotation:"180"
		},"-=3")
		.fromTo($overview.find(".connector"),5,
		{
			height: 0
		},
		{
			height: 15
		})
		.to($overview, 8, {autoAlpha: 0}, '+=0.3');
        if($(window).innerWidth() < 767){
            timeline
            .fromTo($quizHeader, 8, {autoAlpha: 0}, {autoAlpha: 1})
            .to($quizHeader, 8, {autoAlpha: 0})
            .fromTo($quizBody, 8, {autoAlpha: 0}, {autoAlpha: 1});
        }else{
            timeline
            .from($quiz, 8, {autoAlpha: 0}, '-=0.3', '0');
        }
		timeline
		.fromTo($quiz.find(".stagelight-left"),5,{
			rotation: "0",
			autoAlpha: 0
		},
		{
			rotation: "-50",
			autoAlpha: 1
		})
		.fromTo($quiz.find(".stagelight-right"),5,{
			rotation: "0",
			autoAlpha: 0
		},
		{
			rotation: "50",
			autoAlpha: 1
		},"-=3")
        if($(window).innerWidth() < 767){
            timeline.
            to($quizBody, 8, {autoAlpha:0});
        }
        else{
            timeline
            .to($quiz, 8, {autoAlpha: 0}, '+=0.3');
        }
        timeline
		.from($epi, 8, {autoAlpha: 0}, '+=0.3', '0');
		/* Add Scene to Controller */
		scene = new ScrollMagic.Scene({
			offset: wh*0.3,
			triggerElement: $('body')[0],
			duration: '600%'
		});
		scene
		.setTween(timeline)
		.addTo(ctrl);
		var scrollAway;
		$('#go-diamond').mousedown(function (){
			scrollAway = setInterval(function (){
				$('html, body').animate({
				scrollTop: $(window).scrollTop()+100
			  }, 100);
			},100);
		}).mouseup(function (){
			clearInterval(scrollAway);
		}).mouseout(function (){
			clearInterval(scrollAway);
		});
	}
	function destroyPageView(){
		ctrl.destroy(true);
	}
	function restorePageView(){
        initPageView();
	}
	/* DOM functions */
	runLoader();
	$(document).ready(function (){
		var ctrl = null, scene = null;
		syncTimer();
		$('.content-displayed').html($("#landing").html());
        initPageView();
		$('a.in').on("click",function (){
			var target = $(this).attr("href");
			if(ctrl !== null)
				destroyPageView();
			$('.content-displayed').html($(target).html());
            if(target === "#landing"){
				$("html,body").css({"min-height":"800%"});
				$(".content-container").css({'position':'fixed'});
				restorePageView();
			}else{
				$("html,body").css({"min-height":"100%"});
				$(".content-container").css({'position':'relative','overflow-x':'hidden'});
			}
            
            $(".content-displayed > section > .departments > ul > li").click(function (){
                console.log("Click registered");
                $("li.active").removeClass("active");
                $(this).addClass("active");
                $("html,body").animate({
                    scrollTop: $("div[data-target="+$(this).text().toLowerCase()+"]").offset().top - 100 //may need to adjust this
                },100);
            });
		});
		
		var options = {"particles":{"number":{"value":99,"density":{"enable":true,"value_area":552.4033491425909}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#ffffff"},"polygon":{"nb_sides":10},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":10,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1.5782952832645452,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":6,"speed":2},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false};
		particlesJS("particle", options);
		
		$(window).scroll(function (){
			var offset = 25;
			var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
						   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
			var alpha = 0;
			if($(window).scrollTop() > 25){
				alpha = $(window).scrollTop()*10/limit;
				$('#mobileNav').css({'background':'rgba(18, 29, 49, '+alpha+')'});
			}else{
				$('#mobileNav').css({'background':'transparent'});
			}
            
            if($("content-displayed > section").hasClass("contact-container-special")){
                
            }
		  });
	});