
var inputPlayer = document.getElementById("player-box")
var inputClub = document.getElementById("club-bar")
var inputPosition = document.getElementById("position-bar")
var inputCountry = document.getElementById("country-bar")
var clubboxArr = document.getElementsByClassName('clubox')
var positionboxArr = document.getElementsByClassName('posbox')
var countryboxArr = document.getElementsByClassName('coubox')

//Dropdown rendering:

var asian_countries = ["Japan", "South Korea", "Saudi Arabia", "Iran", "Qatar", "China", "Iraq", "United Arab Emirates", "Syria"]
var european_countries = ["France", "Norway", "Belgium", "England", "Poland", "Portugal", "Spain", "Germany", "Netherlands", "Croatia"]
var african_countries = ["Senegal", "Nigeria", "Egypt", "Algeria", "Morocco", "Tunisia", "Cameroon", "Ghana", "Ivory Coast", "Mali"]
var north_american_countries = ["United States", "Mexico", "Canada", "Costa Rica", "Jamaica", "Honduras", "Panama", "El Salvador", "Trinidad and Tobago", "Haiti"]
var south_american_countries = ["Argentina", "Brazil", "Uruguay", "Colombia", "Chile", "Ecuador", "Paraguay", "Peru", "Venezuela", "Bolivia"]
var oceania_countries = ["Australia", "New Zealand", "Fiji", "Papua New Guinea", "Solomon Islands", "Vanuatu", "Samoa", "Tonga", "Kiribati", "Micronesia"]

var english_premier_league = ['Arsenal', 'Chelsea', 'Liverpool', 'Manchester City', 'Manchester United', 'Tottenham Hotspur', 'Newcastle United', 'Aston Villa']
var spanish_la_liga = ['Barcelona', 'Real Madrid', 'Atletico Madrid', 'Sevilla', 'Valencia', 'Real Betis', 'Villareal CF', 'RC Celta']
var german_bundesliga = ['Bayern Munich', 'Borussia Dortmund', 'RB Leipzig', 'Leverkusen', 'Schalke 04', 'Wolfsburg', 'Frankfurt']
var italian_serie_a = ['Juventus', 'Inter', 'Milan', 'Roma', 'Napoli', 'Lazio', 'Sassuolo']
var french_ligue_1 = ['Paris Saint-Germain', 'Lille', 'Lyon', 'Marseille', 'Monaco', 'Stade Rennais']
var saudi_pro_league = ['Al Ahli', 'Al Hilal', 'Al Nassr', 'Al Ittihad']
var MLS = ['Inter Miami']

for (let i = 0; i < english_premier_league.length; i++){
    var items = document.createElement('option')
    items.textContent = english_premier_league[i]
    items.value = english_premier_league[i]
    inputClub.appendChild(items)
}
for (let i = 0; i < spanish_la_liga.length; i++){
    var items = document.createElement('option')
    items.textContent = spanish_la_liga[i]
    items.value = spanish_la_liga[i]
    inputClub.appendChild(items)
}
for (let i = 0; i < german_bundesliga.length; i++){
    var items = document.createElement('option')
    items.textContent = german_bundesliga[i]
    items.value = german_bundesliga[i]
    inputClub.appendChild(items)
}
for (let i = 0; i < italian_serie_a.length; i++){
    var items = document.createElement('option')
    items.textContent = italian_serie_a[i]
    items.value = italian_serie_a[i]
    inputClub.appendChild(items)
}
for (let i = 0; i < french_ligue_1.length; i++){
    var items = document.createElement('option')
    items.textContent = french_ligue_1[i]
    items.value = french_ligue_1[i]
    inputClub.appendChild(items)
}
for (let i = 0; i < saudi_pro_league.length; i++){
    var items = document.createElement('option')
    items.textContent = saudi_pro_league[i]
    items.value = saudi_pro_league[i]
    inputClub.appendChild(items)
}
for (let i = 0; i < MLS.length; i++){
    var items = document.createElement('option')
    items.textContent = MLS[i]
    items.value = MLS[i]
    inputClub.appendChild(items)
}


for (let i = 0; i < asian_countries.length; i++){
    var items = document.createElement('option')
    items.textContent = asian_countries[i]
    items.value = asian_countries[i]
    inputCountry.appendChild(items)
}

for (let i = 0; i < european_countries.length; i++){
    var items = document.createElement('option')
    items.textContent = european_countries[i]
    items.value = european_countries[i]
    inputCountry.appendChild(items)
}

for (let i = 0; i < african_countries.length; i++){
    var items = document.createElement('option')
    items.textContent = african_countries[i]
    items.value = african_countries[i]
    inputCountry.appendChild(items)
}
for (let i = 0; i < north_american_countries.length; i++){
    var items = document.createElement('option')
    items.textContent = north_american_countries[i]
    items.value = north_american_countries[i]
    inputCountry.appendChild(items)
}
for (let i = 0; i < south_american_countries.length; i++){
    var items = document.createElement('option')
    items.textContent = south_american_countries[i]
    items.value = south_american_countries[i]
    inputCountry.appendChild(items)
}
for (let i = 0; i < oceania_countries.length; i++){
    var items = document.createElement('option')
    items.textContent = oceania_countries[i]
    items.value = oceania_countries[i]
    inputCountry.appendChild(items)
}



var playerGuess = 0


class PlayerInfo {
    constructor(name, country, club, rating){
        this.name = name
        this.country = country
        this.club = club
        this.rating = rating
    }
}

player1= new PlayerInfo('Harry Kane', 'England', 'Bayern Munich', 90)

function findCountry(arr, picked){

    for (var i = 0; i < arr.length; i++){
        if (arr[i].toLowerCase() === picked.toLowerCase()){
            return true
        }
    }
    return false

}


function findClub(country, picked){

    for (let i = 0; i < english_premier_league.length; i++){
        if (english_premier_league[i].toLowerCase() === country.toLowerCase()){
            
            if (findCountry(english_premier_league, picked)){
                return true
            }
        }
    }
    for (let i = 0; i < spanish_la_liga.length; i++){
        if (spanish_la_liga[i].toLowerCase() === country.toLowerCase()){
            
            if (findCountry(spanish_la_liga, picked)){
                return true
            }
        }
    }
    for (let i = 0; i < german_bundesliga.length; i++){
        if (german_bundesliga[i].toLowerCase() === country.toLowerCase()){
            
            if (findCountry(german_bundesliga, picked)){
                return true
            }
        }
    }
    for (let i = 0; i < italian_serie_a.length; i++){
        if (italian_serie_a[i].toLowerCase() === country.toLowerCase()){
            
            if (findCountry(italian_serie_a, picked)){
                return true
            }
        }
    }
    for (let i = 0; i < french_ligue_1.length; i++){
        if (french_ligue_1[i].toLowerCase() === country.toLowerCase()){
            
            if (findCountry(french_ligue_1, picked)){
                return true
            }
        }
    }
    for (let i = 0; i < saudi_pro_league.length; i++){
        if (saudi_pro_league[i].toLowerCase() === country.toLowerCase()){
            
            if (findCountry(saudi_pro_league, picked)){
                return true
            }
        }
    }
    for (let i = 0; i < MLS; i++){
        if (MLS[i].toLowerCase() === country.toLowerCase()){
            
            if (findCountry(MLS, picked)){
                return true
            }
        }
    }


    return false


}

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


inputClub.addEventListener("keypress", function(event){
    if(event.keyCode != 13){
        return
    }
    let boxes = document.getElementsByClassName('clubtext')
    let boxVar = -1

    for (var i = 0; i < clubboxArr.length; i++){
        if (clubboxArr[i].style.backgroundColor === 'green' || clubboxArr[i].style.backgroundColor === 'red' || clubboxArr[i].style.backgroundColor === 'yellow'){
            continue
        }

        if(inputClub.value.toLowerCase() === player1.club.toLowerCase()){
            clubboxArr[i].style.backgroundColor = 'green'
            boxes[i].textContent = inputClub.value
            boxVar = i
            break
        } else if (findClub(player1.club, inputClub.value)){
            clubboxArr[i].style.backgroundColor = 'yellow'
            boxes[i].textContent = inputClub.value
            boxVar = i
            break
        }
        
     

    }

    if (boxVar === -1){
        for (let i = 0; i < clubboxArr.length; i++) {
            if (clubboxArr[i].style.backgroundColor !== 'green' && clubboxArr[i].style.backgroundColor !== 'red' && clubboxArr[i].style.backgroundColor !== 'yellow') {
                clubboxArr[i].style.backgroundColor = 'red'
                boxes[i].textContent = inputClub.value
                break
            }
        }
    }
    
    inputClub.value = ''

})

inputPosition.addEventListener("keyup", function(event){
    if(event.keyCode != 13){
        return
    }

    if (isNaN(inputPosition.value)){
        inputPosition.value = ''
        return
    }
    let boxes = document.getElementsByClassName('ratingtext')

    for (var i = 0; i < positionboxArr.length; i++){
        if (positionboxArr[i].style.backgroundColor === 'green' || positionboxArr[i].style.backgroundColor === 'red' || positionboxArr[i].style.backgroundColor === 'yellow'){
            continue
        }
        

        let diff = player1.rating - parseInt(inputPosition.value)
        if (diff === 0){
            positionboxArr[i].style.backgroundColor = 'green'
            boxes[i].textContent = inputPosition.value
            break
        }
        else if (diff === -1 || diff === 1){
            positionboxArr[i].style.backgroundColor = 'yellow'
            boxes[i].textContent = inputPosition.value
            break
        } else{
            positionboxArr[i].style.backgroundColor = 'red'
            boxes[i].textContent = inputPosition.value
            break
        }
        
        

        

    }
    
    inputPosition.value = ''


})


function findContinent(country, picked){
 
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


inputCountry.addEventListener("keypress", function(event){
    if(event.keyCode != 13){
        return
    }
    let boxes = document.getElementsByClassName('countrytext')
    let boxVar = -1

    for (let i = 0; i < countryboxArr.length; i++){
        if (countryboxArr[i].style.backgroundColor === 'green' || countryboxArr[i].style.backgroundColor === 'red' || countryboxArr[i].style.backgroundColor === 'yellow'){
            continue
        }
        
        if (inputCountry.value.toLowerCase() === player1.country.toLowerCase()){
            countryboxArr[i].style.backgroundColor = 'green'
            boxVar = i
            boxes[i].textContent = inputCountry.value
            break
        } else if (findContinent(player1.country, inputCountry.value)){
            countryboxArr[i].style.backgroundColor = 'yellow'
            boxes[i].textContent = inputCountry.value
            boxVar = i
            break
        }
    }

    if (boxVar === -1) {
        // Neither the country or the continent is found
        for (let i = 0; i < countryboxArr.length; i++) {
            if (countryboxArr[i].style.backgroundColor !== 'green' && countryboxArr[i].style.backgroundColor !== 'red' && countryboxArr[i].style.backgroundColor !== 'yellow') {
                countryboxArr[i].style.backgroundColor = 'red'
                boxes[i].textContent = inputCountry.value
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
    let boxes1 = document.getElementsByClassName('ratingtext')
    let boxes2 = document.getElementsByClassName('clubtext')
    let boxes3 = document.getElementsByClassName('countrytext')
    for (let i = 0; i < clubboxArr.length; i++){
        clubboxArr[i].style.backgroundColor = 'white'
        positionboxArr[i].style.backgroundColor = 'white'
        countryboxArr[i].style.backgroundColor = 'white'
        boxes1[i].textContent = ' '
        boxes2[i].textContent = ' '
        boxes3[i].textContent = ' '
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
