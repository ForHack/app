$(function() {
	$('.banner__slider').slick({
		dots: true,
		arrows: false
	});

	$('.slider__product').slick({
		slidesToScroll: 1, 
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 530,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
				}
			}

		]
	});


	$('.articles__box .row').slick({
		slidesToScroll: 1,
		slidesToShow: 4,
		responsive:  [
			{
				breakpoint: 778,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 596,
				settings: {
					slidesToShow: 2,
					arrows: false
				}
			}
		]
	});	


	$('.basket').click( () =>  {
		$('.basket__list').toggleClass('basket__list-move');
	});	

	$(document).on('click', function(e) {
		if (!$(e.target).closest('.basket').length) {
			$('.basket__list').removeClass('basket__list-move');
		}
	})

	$('.navbar-toggler').click(() => {
		$('.navbar-toggler').toggleClass('rotate')
	})

	$('.search i').click(() => {
		$('.container.show__mobile input').toggleClass('show');
	})

	$(document).on('click', function(e) {
		if(!$(e.target).closest('.search__container').length){
			$('.search input').removeClass('search__up')
		}
	});

	$('.head__list').click(() => {
		$('.catalogue__list li').toggleClass('show')
	})

	let counter = 1;

	$('.plus').on('click', () => {
		++counter
		let result = $('input.counter').val(counter)
	});	


	$('.minus').on('click', () => {
		if (counter > 1) {
			counter--
			let result = $('input.counter').val(counter)
		}
	});
});










