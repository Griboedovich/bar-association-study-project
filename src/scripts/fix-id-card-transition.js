const active_part_cards = document.querySelectorAll('.active-info-part-card');

let mobile_status = window.innerWidth <= 925;

window.addEventListener('resize', () => {

	const nowMobile = window.innerWidth <= 925;

	if (nowMobile !== mobile_status) {

		mobile_status = nowMobile;

		for(let i = 0; i < active_part_cards.length; i++) {
			active_part_cards[i].style.transition = 'none';
		}

		requestAnimationFrame(() => {
			
			for(let i = 0; i < active_part_cards.length; i++) {
				active_part_cards[i].style.transition = '';
			}
		});
	}
});



