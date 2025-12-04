const body = document.querySelector('body');

function setTheme(isDark) {
	if (isDark) {
		body.classList.add('dark-mode');
	} else {
		body.classList.remove('dark-mode');
	}
	localStorage.setItem('darkTheme', isDark.toString());
}

let savedDarkTheme = localStorage.getItem('darkTheme');
let preferDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedDarkTheme === null) {
	setTheme(preferDarkTheme);
} else {
	setTheme(savedDarkTheme === 'true');
}

const toggleScheme = document.getElementsByClassName("toggle-scheme");

for (let i = 0; i < toggleScheme.length; i++) {
	toggleScheme[i].addEventListener("click", function() {
		const isCurrentlyDark = body.classList.contains('dark-mode');
		setTheme(!isCurrentlyDark);
	});
}
