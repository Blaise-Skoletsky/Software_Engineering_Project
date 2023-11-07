
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
        var endgame = document.getElementById('endgame-page')
        
        if (playerGuess === 'harry kane'){
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
        
        if (inputPosition.value === 'tottenham'){
            positionboxArr[i].style.backgroundColor = 'green'
            break
        }
        

    }
    
    inputPosition.value = ''


})

inputCountry.addEventListener("keyup", function(event){
    if(event.keyCode != 13){
        return
    }

    for (var i = 0; i < countryboxArr.length; i++){
        if (countryboxArr[i].style.backgroundColor === 'green' || countryboxArr[i].style.backgroundColor === 'red' || countryboxArr[i].style.backgroundColor === 'yellow'){
            continue
        }
        
        //DO stuff to change the thing now based on the name.
        
        if (inputCountry.value === 'tottenham'){
            countryboxArr[i].style.backgroundColor = 'green'
            break
        }
        

    }
    
    inputCountry.value = ''


})


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