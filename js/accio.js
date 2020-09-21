$(window).on('load', function () {

	$('#load').addClass('close');

	setTimeout(function () {
		// HEAD
		$('.accio').each(function (i) {
			setTimeout(function () {
				$('.accio').eq(i).addClass('show');
				//          console.log('testt');
			}, 250 * i);
		});
		$('#load').remove();

	}, 500)
});
