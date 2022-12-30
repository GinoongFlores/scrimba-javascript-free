// Set built-in scores

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

// Set previous scores for each team
let homePreviousScore = 18
let guestPreviousScore = 10

homeScore.textContent = homePreviousScore
guestScore.textContent = guestPreviousScore

// PSEUDOCODE
/* 
 * 1. Create variables for the Home and Guest score that gets the element by their id 
 * 2. Create the onclick() for each three (3) button for the Home and Guest team that will increment based on the button clicked
 * 3. For previous scores, set the scores for each team and increment that previous scores based on number's assigned on each button
 * 4. Inside of each button functions, create a count variable that will increment the previous score. And then set the textContent of the score to the count variable
 ? Additional: Create a function that will reset the score to zero (0) for both teams
*/



// Reset scores to zero (0)

function reset() {
    homePreviousScore = 0
    guestPreviousScore = 0

    homeScore.textContent = 0
    guestScore.textContent = 0
}

// Decrease scores by 1 on each teams

function decreaseForHome() {
    let count = homePreviousScore -= 1

    // if count is less than zero then set it to zero to avoid negative numbers
    if (count < 0) {
        count = 0
    }
    homeScore.textContent = count
}

function decreaseForGuest() {
    let count = guestPreviousScore -= 1

    if (count < 0) {
        count = 0
    }
    guestScore.textContent = count
}

// Button functions for the Home team

function add1ForHome() {
    let count = homePreviousScore += 1
    homeScore.textContent = count
}

function add2ForHome() {
    let count = homePreviousScore += 2
    homeScore.textContent = count
}

function add3ForHome() {
    let count = homePreviousScore += 3
    homeScore.textContent = count
}

// Button functions for the Guest team

function add1ForGuest() {
    let count = guestPreviousScore += 1
    guestScore.textContent = count
}

function add2ForGuest() {
    let count = guestPreviousScore += 2
    guestScore.textContent = count
}

function add3ForGuest() {
    let count = guestPreviousScore += 3
    guestScore.textContent = count
}