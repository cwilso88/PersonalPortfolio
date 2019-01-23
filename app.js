alert("hello");

/*************** Animation *****************/

window.sr = ScrollReveal();
	sr.reveal('[data-animation="reveal"]', {
		duration: 1000,
		scale: 1,
		delay: 0,
		distance: 0,
		origin: 'bottom',
		opacity: 0.1,
		viewFactor: 0.0,
	});


if(width(<992){
	$(".moove").removeClass("moove");
	//var rellax = new Relax('moove-mobile');
}

if(width>991) {
	var rellax = new Rellax('.moove');
	//$(".moove-mobile").removeClass("moove-mobile");
}

$(window).resize(function () {
	var currentwidth = $(window).width();

	if(currentwidth < 992) {
		rellax.destroy(;)
	}
	if(currentwidth > 992 && currentwidth != 1024 && currentwidth != 1366) {
		loction.reload();
	}
});
$(window).on("orientationchange",function(){
	loction.reload();
});