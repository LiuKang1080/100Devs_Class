//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch);


function getFetch() {
    const choice = document.querySelector('input').value
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`
    const ul = document.querySelector("ul");

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            // take the data and unpack the subclass
            // test: "acid-arrow"
            let subclasses = data.subclasses;
            // subclasses is an array
            
            // add it to the DOM by using a for loop / for-each
            subclasses.forEach(element => {
                // create li elements within the ul
                const li = document.createElement("li");
                // add the API data to the li
                // li.innerText = element.name;
                li.textContent = element.name;
                
                // add the API data into the li
                ul.appendChild(li);
            });
        })

        .catch(err => {
            console.log(`error ${err}`)
        });
}
