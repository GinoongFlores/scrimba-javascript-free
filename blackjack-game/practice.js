// My playground

// random 

// let firstCard = Math.floor(Math.random() * 11) + 2 // From 2-11
// let secondCard = Math.floor(Math.random() * 11) + 2

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard

// We add boolean to determine if the player has a Blackjack
let hasBlackJack = false

// Check if the player has enough or not exceeding 21 cards
let isAlive = true

console.log(sum)

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")

    hasBlackJack = true
    console.log(hasBlackJack)

} else if (sum > 21) {
    console.log("You're out of the game! 😭")
    isAlive = false
}

console.log(isAlive)

// conditionals

let age = 100

// if less than 100    -> "Not eligible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not eligible, you have already gotten one"


if (age < 100) {
    console.log("Not eligible")
} else if (age === 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not eligible, you have already gotten one")
}

// Arrays 

// Array indexes starts at 0
let experience = ["Former GDSC Lead",
    "GitHub Campus Expert",
    "Front-end Developer"]

// push is a method that adds an item to the end of the array
// Here the "experience" is our object and the push is the method
experience.push("Back-end Developer")

// Accessing specific items in the array using the index
console.log(experience[0])

// But the length is normally how many items are in the array
console.log(experience.length)

// Array with loops 

let sentence = ["Hello ", "my ", "name ", "is ", "Christian"]
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {
    // Here we used to keep the += to add every word in the array
    greetingEl.textContent += sentence[i] + " "
}

