var getRandomColor = function() {
	return '#' + ('00000'+(Math.random()*(1 << 24)|0).toString(16)).slice(-6);
};

travelToNewColor = function(oldColor, newColor) {
	diff1 = oldColor.slice - newColor.slice;
};

var oldColor = getRandomColor();
window.addEventListener('click', function() {
	$(".target")[0].removeEventListener("mousemove", function() {css({"background-color": getRandomColor()});});
	$("body").css({"background-color": oldColor});
	oldColor = newColor;
	var newColor = getRandomColor();
	$(".target").css(
    {"background-color": newColor, 
     "height": "200px", 
     "width": "200px", 
     "border-radius": "500px"});
	$(".target").show();
	$(".target").animate(
		{'height':1000, "width":1000}, 1000,
		function () {$(".target").fadeOut(2000).delay(1000, function() {
			$(".target").css({"background-color": getRandomColor()});
			$(".target").show();});});
	$(".target")[0].addEventListener("mousemove", function() {$(".target").css({"background-color": getRandomColor()});});

});