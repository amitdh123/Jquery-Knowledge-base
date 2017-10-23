$(document).ready(function(){

	var width = 720;
	var pause = 3000;
	var animationspeed = 1000;
	var currentslide = 1

	var $sliderdiv = $('.slider');
	var $slidingUL = $sliderdiv.find('.slidingimages');
	var $slider = $slidingUL.find('.slide');

    setInterval(function(){
       $slidingUL.animate({'margin-left':'-='+width} , animationspeed , function(){
       	currentslide = currentslide + 1;
       	if(currentslide === $slider.length){
       		currentslide = 1;
       		$slidingUL.css('margin-left',0);
       	}
       });
    } , pause);
});