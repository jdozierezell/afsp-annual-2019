

function listVisibleBoxes() {

var myWindowWidth = $(window).width();



    $(".fadein-bg").each(function () { 
        var screenTop = $(window).scrollTop();
        var screenBottom = $(window).scrollTop() + $(window).height();
        var boxTop = $(this).offset().top;
        var boxHeight = $(this).height();
        var boxBottom = boxTop + boxHeight;
		var myID = $(this).attr("id");
		var mybgcolor = "47,91,196,";
		var myblur = 0;
		var filterVal = 'blur(0px)';
		var alpha = "0";

			
switch(myID) {
  case "home_first":
    mybgcolor = "222,206,61,";
    break;
  case "home_second":
    mybgcolor = "225,32,51,";
    break;
  case "home_third":
    mybgcolor = "26,150,96,";
    break;
  case "home_fourth":
    mybgcolor = "47,91,196,";
    break;
  default:
    mybgcolor = "47,91,196,";
}


if (myWindowWidth < 1024) {


        
        if(boxTop > screenTop) {
            if(boxBottom < screenBottom) {
                //full box
				alpha = ".8";
				myblur = 4;
				$(this).parent('.bgpanel').css('background-color', 'rgba('+ mybgcolor + alpha + ')');
				filterVal = 'blur('+myblur+'px)';
				$(this).parent('.bgpanel').parent('.bgimg').find('.parallax').css({
                            'filter': ''+filterVal+'',
                            '-webkit-filter': ''+filterVal+'',
                            '-moz-filter': ''+filterVal+'',
                            '-o-filter': ''+filterVal+'',
                            '-ms-filter': ''+filterVal+'',
							'-webkit-backdrop-filter': ''+filterVal+'',
							'backdrop-filter': ''+filterVal+''
                        });
				
            } else if(boxTop < screenBottom) {
                //partial (bottom)
                var percent = Math.round((screenBottom - boxTop) / boxHeight * 100);
				var alpha1 = (percent / 100);
				var alpha2 = alpha1 *2;
				if (alpha2 > .8) {alpha2=.8}
				myblur = (percent / 2);
				if (myblur > 4) {myblur=4}
				$(this).parent('.bgpanel').css('background-color', 'rgba('+ mybgcolor + alpha2 + ')');
				filterVal = 'blur('+myblur+'px)';
				$(this).parent('.bgpanel').parent('.bgimg').find('.parallax').css({
                            'filter': ''+filterVal+'',
                            '-webkit-filter': ''+filterVal+'',
                            '-moz-filter': ''+filterVal+'',
                            '-o-filter': ''+filterVal+'',
                            '-ms-filter': ''+filterVal+'',
							'-webkit-backdrop-filter': ''+filterVal+'',
							'backdrop-filter': ''+filterVal+''
                        });
                
            }
        } else if(boxBottom > screenTop) {
            //partial (top)
				alpha = ".8";
				myblur = 4;
				$(this).parent('.bgpanel').css('background-color', 'rgba('+ mybgcolor + alpha + ')');
				filterVal = 'blur('+myblur+'px)';
				$(this).parent('.bgpanel').parent('.bgimg').find('.parallax').css({
                            'filter': ''+filterVal+'',
                            '-webkit-filter': ''+filterVal+'',
                            '-moz-filter': ''+filterVal+'',
                            '-o-filter': ''+filterVal+'',
                            '-ms-filter': ''+filterVal+'',
							'-webkit-backdrop-filter': ''+filterVal+'',
							'backdrop-filter': ''+filterVal+''
                        });
			
        }
		
		if(boxTop >= screenBottom) {
				// off screen 
				alpha = "0";
				myblur = 0;
				$(this).parent('.bgpanel').css('background-color', 'rgba('+ mybgcolor + alpha + ')');
				filterVal = 'blur('+myblur+'px)';
				$(this).parent('.bgpanel').parent('.bgimg').find('.parallax').css({
                            'filter': ''+filterVal+'',
                            '-webkit-filter': ''+filterVal+'',
                            '-moz-filter': ''+filterVal+'',
                            '-o-filter': ''+filterVal+'',
                            '-ms-filter': ''+filterVal+'',
							'-webkit-backdrop-filter': ''+filterVal+'',
							'backdrop-filter': ''+filterVal+''
                        });		

		}
		
		
}

else {
				// desktop 
				alpha = "0";
				myblur = 0;
				$(this).parent('.bgpanel').css('background-color', 'rgba('+ mybgcolor + alpha + ')');
				filterVal = 'blur('+myblur+'px)';
				$(this).parent('.bgpanel').parent('.bgimg').find('.parallax').css({
                            'filter': ''+filterVal+'',
                            '-webkit-filter': ''+filterVal+'',
                            '-moz-filter': ''+filterVal+'',
                            '-o-filter': ''+filterVal+'',
                            '-ms-filter': ''+filterVal+'',
							'-webkit-backdrop-filter': ''+filterVal+'',
							'backdrop-filter': ''+filterVal+''
                        });	
}
		
		
		
		
    });

}

$(function () {    
    listVisibleBoxes();    
    $(window).on("load resize scroll", function() {
        listVisibleBoxes();
    });    
});