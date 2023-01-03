/* 
! PASSWORD GENERATOR 

* Each block of code is commented for readability. 

? Stretch Goals // Optional 

* 1. Ability to set password length - this use an input field 
 - 

* 2. Add "copy-on-click"

* 3. Toggle "symbols" and "numbers" on/off

*/

// * Lists of characters in an array to be used in the random passwords
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

// * Initialize variables 
let generatePass0 = document.querySelector(".gen-pass0")
let generatePass1 = document.querySelector(".gen-pass1")
let randomPasswords = document.querySelector("#generate-password")

// let userSetPasswordLength = document.getElementById("password-length").ariaValueNow

// let parseUserSetLength = parseInt(userSetPasswordLength)

// console.log(userSetPasswordLength)


// * Initialize the password length to be used in the for loop 
let passwordLength = 15

randomPasswords.addEventListener("click", function () {
    // console.log(parseUserSetLength += parseUserSetLength)

    // * Set the <p> elements to empty string to avoid displaying the previous random passwords
    generatePass0.textContent = ''
    generatePass1.textContent = ''


    function getPasswordLength() {
        let userSetPasswordLength = document.getElementById("password-length").value

        let parseUserSetLength = parseInt(userSetPasswordLength)
        console.log(parseUserSetLength)

        if (parseUserSetLength < 8 || parseUserSetLength > 16) {
            alert("Password length must be at least 8 characters")
            // console.log(userSetPasswordLength)
        } else {
            // * We only need 15 characters as the password length, so we loop it until 15 times.
            for (let i = 0; i <= parseUserSetLength; i++) {

                // * Inside this loop we generate the two random passwords with the characters length of 92
                let randomPass0 = Math.floor(Math.random() * characters.length)
                let randomPass1 = Math.floor(Math.random() * characters.length)

                // * Display the two random passwords in the <p> elements with the += operator. Here we already set the <p> elements on the top as empty strings so that every time the button is clicked, the previous random passwords will be replaced with the new ones
                generatePass0.textContent += characters[randomPass0]
                generatePass1.textContent += characters[randomPass1]
            }

        }
    }

    getPasswordLength()


})





