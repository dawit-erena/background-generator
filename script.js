// Declaring variables to capture html elements
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var current = document.querySelector("p");
var body = document.querySelector(".body");
var randomBtn = document.querySelector('button');

// Declaring feature functions
function setBackground(){
	body.style.background = 
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";
	current.textContent = 'CSS: ' + body.style.background;
}
// Attaching event listeners
setBackground();
color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);
randomBtn.addEventListener("click", function(){
	var min = 100000;
	var max = 999999;
	color1.value = '#' + (Math.floor(Math.random()*(max-min+1))+min);
	color2.value = '#' + (Math.floor(Math.random()*(max-min+1))+min);
	setBackground();
})