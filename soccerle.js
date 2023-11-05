
var inputPlayer = document.getElementById("player-box")
var inputClub = document.getElementById("club-bar")
var inputPosition = document.getElementById("position-bar")
var inputCountry = document.getElementById("country-bar")

var playerGuess = 0


inputPlayer.addEventListener("keyup", function (event){
    var boxNum = document.getElementById('guess-num')


    if (event.keyCode == 13){
        playerGuess = inputPlayer.value
        inputPlayer.value=''
        boxNum.textContent = parseInt(boxNum.textContent) - 1
        
    
    }
})


inputClub.addEventListener("keyup", function(event){
    if(event.keyCode != 13){
        return
    }  
    var  clubBox3 = document.getElementById("clubbox3")
    console.log(clubBox3.style['background-color'])
    if (clubBox3.style.backgroundColor === 'green' || clubBox3.style.backgroundColor === 'red' ||clubBox3.style.backgroundColor === 'yellow'){
        inputClub.value = ''
        console.log('box is colored')
        return
    }

        // if the third box is either green, yellow or red already, don't do anything
        // Else, run code.


})

