//Get a dog photo from the dog.ceo api and place the photo in the DOM
const span_button = document.querySelector("span");
const image = document.querySelector("img");
const URL = "https://dog.ceo/api/breeds/image/random";

// when we click on the button, generate the image
span_button.addEventListener("click", generate_image);


function generate_image() {
    // get the request by passing in the URL into the Request object
    const request = new Request(URL);
    
    // we can now use the fetch() method to fetch the data from the dog API
    fetch(request)
        .then(response => response.json())
        .then(data => {
            image.src = data.message;
        })
}

// Resources to use the fetch() method from the fetch API
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// Resource on using the Response from the fetch API, and converting that into JSON, for extracting data
// https://developer.mozilla.org/en-US/docs/Web/API/Response/json
