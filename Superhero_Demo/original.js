const blackWidow1 = document.querySelector('#BW1')
const wonderWoman1 = document.querySelector('#WW1')
const captainMarvel1= document.querySelector('#CM1')
const wandaVision1 = document.querySelector('#WV1')
const starFire1 = document.querySelector('#SF1')
const blackWidow2 = document.querySelector('#BW2')
const wonderWoman2 = document.querySelector('#WW2')
const captainMarvel2 = document.querySelector('#CM2')
const wandaVision2 = document.querySelector('#WV2')
const starFire2 = document.querySelector('#SF2')
const blackWidow3 = document.querySelector('#BW3')
const wonderWoman3 = document.querySelector('#WW3')
const captainMarvel3 = document.querySelector('#CM3')
const wandaVision3 = document.querySelector('#WV3')
const starFire3 = document.querySelector('#SF3')

document.querySelector('#selectBW').addEventListener('click', selectBW)
document.querySelector('#selectWW').addEventListener('click', selectWW)
document.querySelector('#selectCM').addEventListener('click', selectCM)
document.querySelector('#selectWV').addEventListener('click', selectWV)
document.querySelector('#selectSF').addEventListener('click', selectSF)

function selectBW() {
	blackWidow1.classList.toggle('hidden')
	wonderWoman1.classList.add('hidden')
	captainMarvel1.classList.add('hidden')
	wandaVision1.classList.add('hidden')
	starFire1.classList.add('hidden')
	
	blackWidow2.classList.toggle('hidden')
	wonderWoman2.classList.remove('hidden')
	captainMarvel2.classList.remove('hidden')
	wandaVision2.classList.remove('hidden')
	starFire2.classList.remove('hidden')
	
	blackWidow3.classList.toggle('hidden')
	wonderWoman3.classList.remove('hidden')
	captainMarvel3.classList.remove('hidden')
	wandaVision3.classList.remove('hidden')
	starFire3.classList.remove('hidden')
	
	console.log("BW")
	blackWidow2.classList.add('animated')
	blackWidow3.classList.add('animated')
}

function selectWW() {
	blackWidow1.classList.add('hidden')
	wonderWoman1.classList.toggle('hidden')
	captainMarvel1.classList.add('hidden')
	wandaVision1.classList.add('hidden')
	starFire1.classList.add('hidden')
	blackWidow2.classList.remove('hidden')
	wonderWoman2.classList.toggle('hidden')
	captainMarvel2.classList.remove('hidden')
	wandaVision2.classList.remove('hidden')
	starFire2.classList.remove('hidden')
	blackWidow3.classList.remove('hidden')
	wonderWoman3.classList.toggle('hidden')
	captainMarvel3.classList.remove('hidden')
	wandaVision3.classList.remove('hidden')
	starFire3.classList.remove('hidden')
	console.log("WW")
	wonderWoman2.classList.add('animated')
	wonderWoman3.classList.add('animated')
}

function selectCM() {
	blackWidow1.classList.add('hidden')
	wonderWoman1.classList.add('hidden')
	captainMarvel1.classList.toggle('hidden')
	wandaVision1.classList.add('hidden')
	starFire1.classList.add('hidden')
	blackWidow2.classList.remove('hidden')
	wonderWoman2.classList.remove('hidden')
	captainMarvel2.classList.toggle('hidden')
	wandaVision2.classList.remove('hidden')
	starFire2.classList.remove('hidden')
	blackWidow3.classList.remove('hidden')
	wonderWoman3.classList.remove('hidden')
	captainMarvel3.classList.toggle('hidden')
	wandaVision3.classList.remove('hidden')
	starFire3.classList.remove('hidden')
	console.log("CM")
	captainMarvel2.classList.add('animated')
	captainMarvel3.classList.add('animated')
}

function selectWV() {
	blackWidow1.classList.add('hidden')
	wonderWoman1.classList.add('hidden')
	captainMarvel1.classList.add('hidden')
	wandaVision1.classList.toggle('hidden')
	starFire1.classList.add('hidden')
	blackWidow2.classList.remove('hidden')
	wonderWoman2.classList.remove('hidden')
	captainMarvel2.classList.remove('hidden')
	wandaVision2.classList.toggle('hidden')
	starFire2.classList.remove('hidden')
	blackWidow3.classList.remove('hidden')
	wonderWoman3.classList.remove('hidden')
	captainMarvel3.classList.remove('hidden')
	wandaVision3.classList.toggle('hidden')
	starFire3.classList.remove('hidden')
	console.log("WV")
	wandaVision2.classList.add('animated')
	wandaVision3.classList.add('animated')
}

function selectSF() {
	blackWidow1.classList.add('hidden')
	wonderWoman1.classList.add('hidden')
	captainMarvel1.classList.add('hidden')
	wandaVision1.classList.add('hidden')
	starFire1.classList.toggle('hidden')
	blackWidow2.classList.remove('hidden')
	wonderWoman2.classList.remove('hidden')
	captainMarvel2.classList.remove('hidden')
	wandaVision2.classList.remove('hidden')
	starFire2.classList.toggle('hidden')
	blackWidow3.classList.remove('hidden')
	wonderWoman3.classList.remove('hidden')
	captainMarvel3.classList.remove('hidden')
	wandaVision3.classList.remove('hidden')
	starFire3.classList.toggle('hidden')
	console.log("SF")
	starFire2.classList.add('animated')
	starFire3.classList.add('animated')
}