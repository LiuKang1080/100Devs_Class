//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class Netflix_Show {    
    constructor(title, genre, rating, episode_nums) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
        this.episode_nums = episode_nums;
    }

    // methods
    play() {
        console.log("Playing show!");
    }

    stop() {
        console.log("Stopping show.");
    }

    save_to_list() {
        console.log("Saving to list!");
    }
}


let Bridgerton = new Netflix_Show("Bridgerton", "Romance / Drama", "99 %", 16);
