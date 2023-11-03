class player {
    constructor(name, club, country, position){
        this.name = name
        this.club = club
        this.country = country
        this.position = position
    }
}

var mbappe = new player("Mbappe", "France", "France", "Striker")
var clubBar = document.getElementById("player-box")

clubBar.addEventListener('click', function() {

    console.log("hello")


})

//club-bar
