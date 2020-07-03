var scroll = new SmoothScroll('.navbar a[href*="#"]', {
	speed: 800,
});

var play = document.querySelector('#play');
play.addEventListener('click', function () {
	var vid = document.querySelector('#vid');
	vid.controls = true;
	vid.load();
});

new WOW().init();

$('.counter').counterUp({
	delay: 10,
	time: 1500,
});
