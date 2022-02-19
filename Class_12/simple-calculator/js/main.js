let total = 0;

document.querySelector("#zero").addEventListener('click', make_zero);
document.querySelector("#add-3").addEventListener('click', add_3);
document.querySelector('#add-9').addEventListener('click', add_9);
document.querySelector('#subtract-2').addEventListener('click', subtract_2);
document.querySelector("#subtract-5").addEventListener("click", subtract_5);
document.querySelector("#multiply-2").addEventListener("click", multiply_2);


function make_zero() {
	total = 0;
	document.querySelector('#result-text').innerText = total;
}

function add_3() {
	total += 3;
	document.querySelector('#result-text').innerText = total;
}

function add_9() {
	total += 9;
	document.querySelector('#result-text').innerText = total;
}

function subtract_2() {
	total -= 2;
	document.querySelector('#result-text').innerText = total;
}

function subtract_5() {
	total -= 5;
	document.querySelector("#result-text").innerText = total;
}

function multiply_2() {
	total *= 2;
	document.querySelector("#result-text").innerText = total;
}
