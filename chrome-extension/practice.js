// The generateSentence(desc, arr) takes two parameter: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    for (let i = 0; i < arr.length; i++) {

        // if the array is on the last element, remove the comma
        if (i === arr.length - 1) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "
        }
    }

    // we need to return variable to immediately exits the function and get its value
    return baseString
}

// here we pass the arguments to the two parameters in the function 
const sentence = generateSentence("Best fruits", ["Apples", "Bananas", "Oranges", "Avocado", "Grapes", "Pineapple"])
console.log(sentence)
