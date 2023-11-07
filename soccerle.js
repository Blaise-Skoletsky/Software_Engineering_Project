
var inputPlayer = document.getElementById("player-box")
var inputClub = document.getElementById("club-bar")
var inputPosition = document.getElementById("position-bar")
var inputCountry = document.getElementById("country-bar")
var clubboxArr = document.getElementsByClassName('clubox')
var positionboxArr = document.getElementsByClassName('posbox')
var countryboxArr = document.getElementsByClassName('coubox')

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
        
        if (inputPosition.value === 'tottenham'){
            positionboxArr[i].style.backgroundColor = 'green'
            break
        }
        

    }
    
    inputPosition.value = ''


})

