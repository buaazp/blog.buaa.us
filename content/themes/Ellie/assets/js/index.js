$(document).ready(function(){

	$('pre').addClass('prettyprint');

	mainImage = $('img[alt="main-image"]');

	if ( mainImage.length > 0){
		mainImageSource = mainImage.attr('src');
		$('header').css('background-image','url('+mainImageSource+')');
		mainImage.remove();
	}

});

/*模拟键盘上下滚动*/
window.onload = function(){
	document.onkeydown = function(e) {
	    e = e || window.event;
	    if (e.keyCode == '74') {
	        $('html,body').stop();
	        $('html,body').animate({
	            scrollTop: $(window).stop().scrollTop() + 200
	        },'fast')
	    }
	    else if (e.keyCode == '75') {
	        $('html,body').stop();
	        $('html,body').animate({
	            scrollTop: $(window).stop().scrollTop() - 200
	        },'fast')
	    }

	}
};

