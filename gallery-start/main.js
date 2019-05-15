var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for(let i=1; i<6; i++){
	var newImage = document.createElement('img');
	newImage.setAttribute('src', 'images/pic' +i +'.jpg');
	thumbBar.appendChild(newImage);
	newImage.onclick = function(e) {
		var imgSrc = e.target.getAttribute('src');
		displayImage(imgSrc);
	}
}

function displayImage(imgSrc) {
	displayedImage.setAttribute('src', imgSrc);
}

/*wiring up the Darken/Lighten button */
btn.onclick = function() {
	var btnclass = btn.getAttribute('class');
	if(btnclass === 'dark') {
		btn.setAttribute('class', 'light');
		btn.textContent = 'lighten';
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	} 
	else {
		btn.setAttribute('class', 'dark');
		btn.textContent = 'darken';
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	}
}
