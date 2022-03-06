//Object
let player = {
    name: "Thor",
    chips: 152
};

//Variables

let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let startBtn = document.getElementById("start-btn");
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");
let newCard = document.getElementById("new-card");
let playerEl = document.getElementById("player-el");

playerEl.innerHTML = `${player.name}: $${player.chips}`;
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if(randomNumber > 10){
        return 10;
    }else if(randomNumber === 1){
        return 11;
    } else{
        return randomNumber;
    }

}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardsEl.innerHTML = " "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += cards[i] + " "
    }
    
    sumEl.innerHTML = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.innerHTML = message
}

function drawNewCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

startBtn.addEventListener("click", startGame);

newCard.addEventListener("click", drawNewCard);