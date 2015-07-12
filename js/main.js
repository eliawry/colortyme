getRandomColor = function() {
	return '#' + ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
}

travelToNewColor = function(oldColor, newColor) {
	diff1 = oldColor.slice - newColor.slice

}

var oldColor = getRandomColor()
window.addEventListener('click', function() {
	$("body").css({"background-color": oldColor});
	var newColor = getRandomColor();
	$(".target").css({"background-color": newColor, "height": "200px", "width": "200px", "border-radius": "500px"})
	$(".target").show();
	$(".target").animate({'height':1000, "width":1000}, 1000);
	oldColor = newColor;
	$(".target").fadeOut(2000).delay(1000);
	//$("body").animate({"background-color": newColor});
});
	
 