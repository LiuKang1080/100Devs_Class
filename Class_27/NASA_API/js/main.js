// Example fetch using the NASA API

// Declare variables
let url = "https://api.nasa.gov/planetary/apod?";
let api_key = "api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn";
let img = document.querySelector("img");
let h3 = document.querySelector("h3");

document.querySelector('button').addEventListener('click', getFetch);
document.querySelector("iframe").classList.toggle("hidden");


function getFetch() {
	// local variables
	const choice = "&date=" + document.querySelector('input').value;
	const full_url = `${url}${api_key}${choice}`;

	// clear the fields before populating them with the new fetch request
	img.src = "";
	h3.innerText = "";

	fetch(full_url)
		.then(res => res.json()) // parse response as JSON
		.then(data => {
			// check to see if NASA return an image or a video:
			if (data.media_type === "image") {
				document.querySelector("img").src = data.hdurl;
			} else if (data.media_type === "video") {
				// add the new iframe element
				let iframe = document.createElement("iframe");
				document.body.insertBefore(iframe, h3);

				// add the source
				iframe.src = data.url;
			}
			
			document.querySelector("h3").innerText = data.explanation;
		})
		
		.catch(err => {
			console.log(`error ${err}`)
		});
}
