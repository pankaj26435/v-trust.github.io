// Animated Toggle Button for Mobile
$(document).ready(function () {
	$(".navbar-toggler").on("click", function () {
	  $(this).toggleClass("opened");
			});
	});

$(document).ready(function () {

	$('#js-main-slider').pogoSlider({
		autoplay: true,
		autoplayTimeout: 4000,
		displayProgess: true,
		preserveTargetSize: true,
		targetWidth: 1000,
		targetHeight: 350,
		responsive: true,				
	}).data('plugin_pogoSlider');

	var transitionDemoOpts = {
		displayProgess: false,
		generateNav: false,
		generateButtons: false
	}


});