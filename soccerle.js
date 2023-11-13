
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
    african_countries = ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros", "Congo", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"]
    asian_countries = ["Afghanistan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Palestine", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Timor-Leste", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"]
    european_countries = ["Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "England", "Vatican City"]
    north_american_countries = ["Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States"]
    oceania_countries = ["Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia", "Nauru", "New Zealand", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu"]
    south_american_countries = ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"]

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