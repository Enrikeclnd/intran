document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
	duration: 250,
	dist:-90,
	shift: 5,
	pading: 5,
	numVisible: 3,
	indicators: true,
	noWrap: false

  });

});