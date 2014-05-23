/**
 * 
 */
$(window).resize(function(){
	var height = $(window).height(),
		width = $(window).width();
	if (width > 480) {
		$("#header-container").css("background", "#f165d3");
		$("#footer-container").css("background", "#f165d3");
		$("#main aside").css("background", "#f165d3");
	} else if (width < 480) {
		$("#header-container").css("background", "#f16529");
		$("#footer-container").css("background", "#f16529");
		$("#main aside").css("background", "#f16529");
	}
});