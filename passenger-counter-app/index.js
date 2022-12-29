
/* passenger counter app

? The Pseudocode for this project

* 1. initialize the count as 0
* 2. listen for clicks on the increment button
* 3. increment the count variable when the button is clicked
* 4. change the count-el in the HTML to reflect the new count 

*/
let count = 0

let counterDisplay = document.getElementById("count-el")
// Check the representation HTML element of this variable 
console.log(counterDisplay)

// Increment function

function increment() {
    count += 1
    counterDisplay.textContent = count
}

// Decrement function

function decrement() {
    count -= 1

    // if count is less than zero then set it to zero to avoid negative numbers
    if (count < 0) {
        count = 0
    }
    counterDisplay.textContent = count
}


// Save function

let saveEl = document.getElementById("save-el")

function save() {
    let countStr = count + " - "

    // innerText won't return spaces or hidden value. We use textContent, as it will return all the text
    // Search for "innerText alternative mdn to find out more"
    saveEl.textContent += countStr

    counterDisplay.textContent = 0

    // Reset the count to 0 after each save
    count = 0

    console.log(count)
}






