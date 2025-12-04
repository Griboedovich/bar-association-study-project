let mobile_status = window.innerWidth <= 925;
let resizeTimeout;

window.addEventListener('resize', () => {
    let nowMobile = window.innerWidth <= 925;
    
    if (nowMobile !== mobile_status) {
        mobile_status = nowMobile;
        
        const active_part_cards = document.querySelectorAll('.active-info-part-card');
        
        for(let i = 0; i < active_part_cards.length; i++) {
            active_part_cards[i].style.transition = 'none';
        }
        
        clearTimeout(resizeTimeout);
        
        resizeTimeout = setTimeout(() => {
            for(let i = 0; i < active_part_cards.length; i++) {
                active_part_cards[i].style.transition = '';
            }
        }, 50); 
    }
});
