document.querySelector('#check').addEventListener('click', check);


function check() {
	/*
		- Check to see what day the user entered
		- If the user entered Tuesday or Thursday, then display result as: "Class Day!"
		- If the user entered Monday, Wednesday, or Friday display the result as: "A Boring Day."
		- If the user entered Saturday or Sunday, then display the result as: "Weekend!"
	*/

	// get the value the user entered:
	const day = document.querySelector('#day').value;

	// convert what the user entered into all lowercase for comparison:
	const result = day.toLowerCase();
	
	// check to see what day the uder entered and print the results:
	if ((result === "tuesday") || (result === "thursday")) {
		document.querySelector("#result-text").innerText = "Class Day!";		
	} else if ((result === "saturday") || (result === "sunday")) {
		document.querySelector("#result-text").innerText = "Weekend!";
	} else if ((result === "monday") || (result === "wednesday") || (result === "friday")) {
		document.querySelector("#result-text").innerText = "BOOORING!";
	} else {
		document.querySelector("#result-text").innerText = "Please enter a day properly.";
	}
}
