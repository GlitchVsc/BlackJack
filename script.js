let firstCard = 10
let secondCard = 4

let card = 7
let sum = firstCard + secondCard 
let message = ""

let hasBlackJack = false
let isAlive = true







let start = document.getElementById("start-button")
let newCard = document.getElementById("new-card")

let messageEl = document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")


function startGame(){

    renderGame()
}





function renderGame() {

    
    sumEl.textContent ="Sum: " + sum 
    cardsEl.textContent ="Cards: " + firstCard +" " + secondCard

    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
        messageEl.textContent = message
       

}


function drawCard(){
    let card = 7 
    sum += card
    renderGame()
}

start.addEventListener('click', (e)=>{
    startGame()
    
})

newCard.addEventListener('click', (e)=>{
    drawCard()
})


