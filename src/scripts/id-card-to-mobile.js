let imageParts = document.querySelectorAll('.image-part');
let activeParts = document.querySelectorAll('.active-info-part-card');

for(let i = 0; i < imageParts.length; i++){
	imageParts[i].addEventListener('click', function(){
		if (imageParts[i].classList.contains('open')){
			imageParts[i].classList.remove('open');
		
		} else {
			imageParts[i].classList.add('open');
		}
	
	});
}

for(let j = 0; j < activeParts.length; j++){
	activeParts[j].addEventListener('click', function(){
		if (imageParts[j].classList.contains('open')){
			imageParts[j].classList.remove('open');
		
		} else {
			imageParts[j].classList.add('open');
		}

	});
}
