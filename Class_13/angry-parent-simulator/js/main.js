document.querySelector('#yell').addEventListener('click', run);

function run() {
	const fName = document.querySelector('#firstName').value;
	const fMidName = document.querySelector('#firstMiddle').value;
	const lMidName = document.querySelector('#lastMiddle').value;
	const lName = document.querySelector('#lastName').value;

	// document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName;

	// We can also use template literals: it construct a string, with whitepsaces.
	document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`;
}


const synth = window.speechSynthesis;
document.querySelector('#yell').addEventListener('click', run)


function run() {
	const fName = document.querySelector('#firstName').value
	const fMidName = document.querySelector('#firstMiddle').value
	const lMidName = document.querySelector('#lastMiddle').value
	const lName = document.querySelector('#lastName').value

	const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`

	document.querySelector('#placeToYell').innerText = yellText

	let yellThis = new SpeechSynthesisUtterance(yellText);

	synth.speak(yellThis);
}