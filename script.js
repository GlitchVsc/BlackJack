
let cards = []

let card = 0
let sum = 0
let message = " "

let hasBlackJack = false
let isAlive = false


let start = document.getElementById("start-button")
let newCard = document.getElementById("new-card")
 
let messageEl = document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")


//Creating player Object
let player = {
    name: "Lhsto",
    chips: 200
}

let playerEl=document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//Function for the random card with math.floor and .random 
function getRandomCard(){

    let randomNumber = Math.floor(Math.random() *13 ) + 1
    
    
    if (randomNumber > 10  ){
        return 10
    } else if(randomNumber === 1 ){
        return 11
    }else{
            return randomNumber
        }
}
    //STARTING THE GAME
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard

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


// Function for when u click the new card-button
function drawCard(){

    
    if ( isAlive === true && hasBlackJack=== false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }    

}

start.addEventListener('click', (e)=>{
    startGame()
    
})

newCard.addEventListener('click', (e)=>{
    drawCard()
})


