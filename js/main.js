$(document).ready(function(){
		// SEARACH-BOX
		function openSearch() {
		  document.getElementById("myOverlay").style.display = "block";
		}

		function closeSearch() {
		  document.getElementById("myOverlay").style.display = "none";
		}
		// ADD STICKY-TOP
		     $(window).scroll(function(){
			     if ($(this).scrollTop()>100){
			       	$(".menu").addClass("sticky-top");
			     }else{
			     	$(".menu").removeClass("sticky-top");
			     }
			});

		// SCROLL-TOP
			 $(window).scroll(function(){
		         if ($(this).scrollTop()> 400){
		           $(".scroll").fadeIn();
		         }else{
		            $(".scroll").fadeOut();
		         }
		     });
		     $(".scroll").click(function(){
		        $("html, body").animate({scrollTop:0}, 1000);
		     });
		    
 
});
