/*
	- JavaScript functions for chaging the color of the .body for index.html
*/

// Functions:
function change_color_red() {
	document.querySelector('body').style.backgroundColor = "red";
	document.querySelector('body').style.color = "black";
}

function change_color_lightgreen() {
	document.querySelector('body').style.backgroundColor = "lightgreen";
	document.querySelector('body').style.color = 'black';
}

function change_color_blue() {
	document.querySelector('body').style.backgroundColor = 'blue';
	document.querySelector('body').style.color = 'black';
}

function change_color_gold() {
	document.querySelector("body").style.backgroundColor = "gold";
	document.querySelector("body").style.color = "black";
}

function change_color_lightblue() {
	document.querySelector("body").style.backgroundColor = "lightblue";
	document.querySelector("body").style.color = "black";
}

function change_color_reset() {
	document.querySelector("body").style.backgroundColor = "white";
	document.querySelector("body").style.color = "black";
}


document.querySelector("#red").addEventListener("click", change_color_red);
document.querySelector("#light-green").addEventListener("click", change_color_lightgreen);
document.querySelector("#blue").addEventListener("click", change_color_blue);
document.querySelector("#gold").addEventListener("click", change_color_gold);

// We can also specifically target classes just like we can with IDs:
// We use the . like we do in CSS to target classes.
// Remember that the functions that run will target all elements with that class!
document.querySelector(".light-blue").addEventListener("click", change_color_lightblue);
document.querySelector("#reset").addEventListener("click", change_color_reset);
