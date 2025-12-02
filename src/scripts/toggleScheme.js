const body = document.querySelector('body');

if ( window.matchMedia("(prefers-color-scheme: dark").matches) {
	body.classList.toggle('dark-mode');
}



const toggleScheme = document.getElementsByClassName("toggle-scheme");

for (let i = 0; i < toggleScheme.length; i++){
	toggleScheme[i].addEventListener("click", function(){
		
		body.classList.toggle('dark-mode');
	});
}
