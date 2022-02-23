// grab all of the elements that contain this class
const contestants = document.querySelectorAll(".contestant");

// add an event listener to each of the elements. Add the function to each of them.
Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))


function checkForRose(click) {
	if (click.target.classList.contains("rose")) {
		document.querySelector('#nikki').classList.toggle("hidden");
	} else {
		alert("Wrong!");
	}
}
