// The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// URL = www.thecocktaildb.com/api/json/v1/1/search.php?s=


document.querySelector("button").addEventListener("click", fetch_api);


function fetch_api() {
	const choice = document.querySelector('input').value;
	const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + choice;

	fetch(url)
		.then ((res) => res.json())				// parse response as JSON
		.then ((data) => {
            // console.log(data);
            
            // work with the first item
            let drink = data.drinks[0];

            // set the sata values into the HTML
            document.querySelector("h2").innerText = drink.strDrink;
            document.querySelector("img").src = drink.strDrinkThumb;
            document.querySelector("h3").innerText = drink.strInstructions;
        })

		.catch ((err) => {
			console.log(`error ${err}`);
		});
}
