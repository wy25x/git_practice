var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");

function updateGradient(){
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.innerText = `background: linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener("input", updateGradient)

color2.addEventListener("input", updateGradient)