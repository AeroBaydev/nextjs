(function ($) {
	
	"use strict";

	
	
var lastScroll = 0;
$(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if(lastScroll - scroll > 0) {
        $(".header-area").addClass("background-header");
    } else {
        $(".header-area").removeClass("background-header");
    }

    lastScroll = scroll;
	
	if(scroll == 0) {
		$(".header-area").removeClass("background-header");
	}
});
		
$(".play-btn").on("click", function(){
	$(this).toggleClass('play-active');
});

	
	/*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });
	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}
	


})(window.jQuery);