// Functions:
function checkForRose(click) {
	// If the object we click contains "rose" as one of its value for the class, then we will execute the code in the code block.
	if (click.target.classList.contains("rose")) {
		document.querySelector('#nikki').classList.toggle("hidden");
	} else {
		alert("Wrong!");
	}
}


// grab all of the elements that contain this class "contestant"
const contestants = document.querySelectorAll(".contestant");

// add an event listener to each of the elements. Add and then run the function to each of them.
Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose));
