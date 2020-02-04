
$(".scroll_link").click(function() {

var target = $(this).attr("rel");
$('html, body').animate({scrollTop: $("#"+target).offset().top}, 500);

});




$(function() {
	
var anchor = document.querySelectorAll('#nav_toggle');
    
    [].forEach.call(anchor, function(anchor){
      anchor.onclick = function(event){
        event.preventDefault();
        if($('#mobile_nav').is(':visible')){
          this.classList.remove('nav_toggle-close');
			
			$('.slide-in').toggleClass('show');
			$('#mobile_nav').delay(400).animate({width: "toggle"}, 1, function() {
			//$('.slide-in').toggleClass('show');
			// Animation complete.
			});
        }
        else{
          this.classList.add('nav_toggle-close');
			$('#mobile_nav').animate({width: "toggle"}, 1, function() {
			$('.slide-in').toggleClass('show');
			// Animation complete.
			});
        }
      }
    }); 
	
	window.onresize = function() {
    if ($('#nav_toggle').is(':visible')) {
		
		if ($('#nav_toggle').hasClass('nav_toggle-close')) {
			$('#nav_toggle').removeClass('nav_toggle-close');
			$('#mobile_nav').hide();
			$('.slide-in').toggleClass('show');
		}
		else {
		//
		
		}
		
		
			
	}
	else {
		$('#nav_toggle').removeClass('nav_toggle-close');
		$('.slide-in').removeClass('show');
		
	}
		
		
		
}


}); 
   
 // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});  