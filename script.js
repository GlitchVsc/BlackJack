let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard , secondCard]

let card = 7
let sum = firstCard + secondCard 
let message = " "

let hasBlackJack = false
let isAlive = true


let start = document.getElementById("start-button")
let newCard = document.getElementById("new-card")

let messageEl = document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")


function getRandomCard(){
    return 5 
}

function startGame(){

    renderGame()
}

function renderGame() {

    cardsEl.textContent ="Cards: " 
    
    for (let i = 0 ; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent ="Sum: " + sum 
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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()

}

start.addEventListener('click', (e)=>{
    startGame()
    
})

newCard.addEventListener('click', (e)=>{
    drawCard()
})


