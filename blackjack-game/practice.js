/* let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard + 6 // 23

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
} */

// My playground

let firstCard = Math.floor(Math.random() * 11) + 2 // From 2-11
let secondCard = Math.floor(Math.random() * 11) + 2
let sum = firstCard + secondCard
console.log(sum)

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else if (sum > 21) {
    console.log("You're out of the game! 😭")
}