
let arrCards = []
let sum = 0

let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "Christian",
    chips: 145
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1

    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true

    // set or transfer here the first two cards so that the casino would not determine the first two cards for the player 
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    arrCards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards: "

    for (let i = 0; i < arrCards.length; i++) {
        cardsEl.textContent += arrCards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message

}

function newCard() {
    // Allow the player only if the player isAlive and has not got Blackjack

    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()

        // add the card to the sum
        sum += card
        arrCards.push(card)
        renderGame()

    }

    // renderGame()


}




