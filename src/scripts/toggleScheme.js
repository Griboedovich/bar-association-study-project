const body = document.querySelector('body');

let savedDarkTheme = localStorage.getItem('darkTheme');
let preferDarkTheme = window.matchMedia("(prefers-color-scheme: dark").matches;


if (savedDarkTheme === null) {
	if (preferDarkTheme) {
		body.classList.add('dark-mode');
		
		localStorage.setItem('darkTheme', 'true');
	} else {
		localStorage.setItem('darkTheme', 'false');
	}
} else {
	if (savedDarkTheme === 'true') {
		body.classList.add('dark-mode');
	}
}


const toggleScheme = document.getElementsByClassName("toggle-scheme");

for (let i = 0; i < toggleScheme.length; i++){
	toggleScheme[i].addEventListener("click", function(){

		body.classList.toggle('dark-mode');

		savedDarkTheme = localStorage.getItem('darkTheme');

		if (savedDarkTheme === 'true') {
			localStorage.setItem('darkTheme', 'false');
		} else {
			localStorage.setItem('darkTheme', 'true');
		}


	});
}
