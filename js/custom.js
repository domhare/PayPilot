(($ => {
	/*
	Mouse Hover Split (imported from demo-seo-3.html)
	*/
	const left = document.getElementById("side-left");

	const handleMove = ({clientX}) => {
		left.style.width = `${clientX / window.innerWidth * 100}%`;
	}

	document.onmousemove = e => handleMove(e);

	document.ontouchmove = ({touches}) => handleMove(touches[0]);

	$(window).on('load resize', () => {
		const height = $('.mouse-hover-split .side').height();
		$('.mouse-hover-split').css('min-height', height);
	});
})(jQuery));
