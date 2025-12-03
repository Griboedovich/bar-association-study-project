const active_part_cards = document.querySelectorAll('.active-info-part-card');

let mobile_status = window.innerWidth <= 925;


console.log('1');

window.addEventListener('resize', () => {

	if (nowMobile !== mobile_status) {
		console.log('Resize event fired');
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



