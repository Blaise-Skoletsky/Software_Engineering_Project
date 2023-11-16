
var inputPlayer = document.getElementById("player-box")
var inputClub = document.getElementById("club-bar")
var inputPosition = document.getElementById("position-bar")
var inputCountry = document.getElementById("country-bar")
var clubboxArr = document.getElementsByClassName('clubox')
var positionboxArr = document.getElementsByClassName('posbox')
var countryboxArr = document.getElementsByClassName('coubox')

var playerGuess = 0


class PlayerInfo {
    constructor(name, country, club, position){
        this.name = name
        this.country = country
        this.club = club
        this.position = position
    }
}

player1= new PlayerInfo('Harry Kane', 'England', 'Bayern Munich', 'Striker')



inputPlayer.addEventListener("keyup", function (event){
    var boxNum = document.getElementById('guess-num')


    if (event.keyCode == 13){
        playerGuess = inputPlayer.value
        inputPlayer.value=''
        boxNum.textContent = parseInt(boxNum.textContent) - 1
        var endgame = document.getElementById('endgame-page')
        
        if (playerGuess.toLowerCase() === player1.name.toLowerCase()){
            endgame.classList.toggle('hidden')
            document.getElementById('endmessage').textContent = 'You Win!'
            return
        }


        if (boxNum.textContent === '0'){
    
            endgame.classList.toggle('hidden')
            document.getElementById('endmessage').textContent = 'You Lose!'
            return
            
        
        }
        
    
    }
})


inputClub.addEventListener("keyup", function(event){
    if(event.keyCode != 13){
        return
    }

    for (var i = 0; i < clubboxArr.length; i++){
        if (clubboxArr[i].style.backgroundColor === 'green' || clubboxArr[i].style.backgroundColor === 'red' || clubboxArr[i].style.backgroundColor === 'yellow'){
            continue
        }
        
        //DO stuff to change the thing now based on the name.
        
        if (inputClub.value === 'tottenham'){
            clubboxArr[i].style.backgroundColor = 'green'
            break
        }
        

    }
    
    inputClub.value = ''


})

inputPosition.addEventListener("keyup", function(event){
    if(event.keyCode != 13){
        return
    }

    for (var i = 0; i < positionboxArr.length; i++){
        if (positionboxArr[i].style.backgroundColor === 'green' || positionboxArr[i].style.backgroundColor === 'red' || positionboxArr[i].style.backgroundColor === 'yellow'){
            continue
        }
        
        //DO stuff to change the thing now based on the name.

        
        
        if (inputPosition.value.toLowerCase() === player1.position.toLowerCase()){
            positionboxArr[i].style.backgroundColor = 'green'
            break
        }
        

    }
    
    inputPosition.value = ''


})
function findCountry(arr, picked){

    for (var i = 0; i < arr.length; i++){
        if (arr[i].toLowerCase() === picked.toLowerCase()){
            return true
        }
    }
    return false

}


function findContinent(country, picked){
    asian_countries = ["Japan", "South Korea", "Saudi Arabia", "Iran", "Qatar", "China", "Iraq", "United Arab Emirates", "Syria"]
    european_countries = ["France", "Norway", "Belgium", "England", "Poland", "Portugal", "Spain", "Germany", "Netherlands", "Croatia"]
    african_countries = ["Senegal", "Nigeria", "Egypt", "Algeria", "Morocco", "Tunisia", "Cameroon", "Ghana", "Ivory Coast", "Mali"]
    north_american_countries = ["United States", "Mexico", "Canada", "Costa Rica", "Jamaica", "Honduras", "Panama", "El Salvador", "Trinidad and Tobago", "Haiti"]
    south_american_countries = ["Argentina", "Brazil", "Uruguay", "Colombia", "Chile", "Ecuador", "Paraguay", "Peru", "Venezuela", "Bolivia"]
    oceania_countries = ["Australia", "New Zealand", "Fiji", "Papua New Guinea", "Solomon Islands", "Vanuatu", "Samoa", "Tonga", "Kiribati", "Micronesia"]

    for (let i = 0; i < european_countries.length; i++){
        if (european_countries[i].toLowerCase() === country.toLowerCase()){
            
            if (findCountry(european_countries, picked)){
                return true
            }
        }
    }
    for (let i = 0; i < african_countries.length; i++){
        if (african_countries[i].toLowerCase() === country.toLowerCase()){
            
            if (findCountry(african_countries, picked)){
                return true
            }
        }
    }
    for (let i = 0; i < asian_countries.length; i++){
        if (asian_countries[i].toLowerCase() === country.toLowerCase()){
            
            if (findCountry(asian_countries, picked)){
                return true
            }
        }
    }
    for (let i = 0; i < north_american_countries.length; i++){
        if (north_american_countries[i].toLowerCase() === country.toLowerCase()){
            
            if (findCountry(north_american_countries, picked)){
                return true
            }
        }
    }
    for (let i = 0; i < south_american_countries.length; i++){
        if (south_american_countries[i].toLowerCase() === country.toLowerCase()){
            
            if (findCountry(south_american_countries, picked)){
                return true
            }
        }
    }
    for (let i = 0; i < oceania_countries.length; i++){
        if (oceania_countries[i].toLowerCase() === country.toLowerCase()){
            
            if (findCountry(oceania_countries, picked)){
                return true
            }
        }
    }


    return false


}


inputCountry.addEventListener("keyup", function(event){
    if(event.keyCode != 13){
        return
    }

    let boxVar = -1

    for (let i = 0; i < countryboxArr.length; i++){
        if (countryboxArr[i].style.backgroundColor === 'green' || countryboxArr[i].style.backgroundColor === 'red' || countryboxArr[i].style.backgroundColor === 'yellow'){
            continue
        }
        
        if (inputCountry.value.toLowerCase() === player1.country.toLowerCase()){
            countryboxArr[i].style.backgroundColor = 'green'
            boxVar = i
            break
        } else if (findContinent(player1.country, inputCountry.value)){
            countryboxArr[i].style.backgroundColor = 'yellow'
            boxVar = i
            break
        }
    }

    if (boxVar === -1) {
        // Neither the country or the continent is found
        for (let i = 0; i < countryboxArr.length; i++) {
            if (countryboxArr[i].style.backgroundColor !== 'green' && countryboxArr[i].style.backgroundColor !== 'red' && countryboxArr[i].style.backgroundColor !== 'yellow') {
                countryboxArr[i].style.backgroundColor = 'red'
                break
            }
        }
    }

    inputCountry.value = ''
});




var helpbutton = document.getElementById('helpbutton')
var removebutton = document.getElementById('removepage')
helpbutton.addEventListener('click', function(){
    helpbutton.classList.toggle('hidden')
    var helppage = document.getElementById('questionpage')
    helppage.classList.toggle('hidden')

    

})

removebutton.addEventListener('click', function(){
    var helppage = document.getElementById('questionpage')
    helppage.classList.toggle('hidden')
    helpbutton.classList.toggle('hidden')

    
})


resbutton = document.getElementById('restart')
resbutton.addEventListener('click', function(){
    playerGuess = 0

    for (let i = 0; i < clubboxArr.length; i++){
        clubboxArr[i].style.backgroundColor = 'white'
        positionboxArr[i].style.backgroundColor = 'white'
        countryboxArr[i].style.backgroundColor = 'white'
    }
    var boxNum = document.getElementById('guess-num')
    boxNum.textContent = 3

    var endgame = document.getElementById('endgame-page')
    endgame.classList.toggle('hidden')



})



var english_premier_league = ['Arsenal', 'Chelsea', 'Liverpool', 'Manchester City', 'Manchester United', 'Tottenham Hotspur', 'Newcastle United', 'Aston Villa']
var spanish_la_liga = ['Barcelona', 'Real Madrid', 'Atletico Madrid', 'Sevilla', 'Valencia', 'Real Betis', 'Villareal CF', 'RC Celta']
var german_bundesliga = ['Bayern Munich', 'Borussia Dortmund', 'RB Leipzig', 'Leverkusen', 'Schalke 04', 'Wolfsburg', 'Frankfurt']
var italian_serie_a = ['Juventus', 'Inter', 'Milan', 'Roma', 'Napoli', 'Lazio', 'Sassuolo']
var french_ligue_1 = ['Paris Saint-Germain', 'Lille', 'Lyon', 'Marseille', 'Monaco', 'Stade Rennais']
var saudi_pro_league = ['Al Ahli', 'Al Hilal', 'Al Nassr', 'Al Ittihad']
var MLS = ['Inter Miami']
