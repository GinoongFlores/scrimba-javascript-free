


console.log(`
template literals
`)
// template literals
let name = "Christian"
let greeting = "Hello"

let show = `
${greeting} 
${name}`

document.getElementById("display").textContent = show


console.log(`
destructuring objects

`)
// objects

const names = {
    clubLeader: "Christian",
    club: "GDSC STI CDO",
    title: "GDSC Lead",
    members: {
        memberName: "John",
        club: "GDSC",
        titleMember: "GDSC Members"
    }

}

console.log(names.clubLeader) // instead of this 

// we can do this - destructuring objects

// object destructuring helps to extract data from objects easily without having to write the object repeatedly
const { clubLeader, club, title, members: { memberName, titleMember } } = names

console.log(`${clubLeader} is the ${title} of the ${club}`)
console.log(`There is a member named ${memberName} and he is one of the ${titleMember}`)

// we can get the child object without calling its parent object
console.log(`${memberName} ${titleMember}`)

console.log(`
destructuring arrays

`)

// destructuring arrays
let [firstName, lastName, job] = ['christian paul', 'flores', 'front-end developer']

// change value of an index
job = "full-stack developer"

console.log(firstName, lastName, job)


console.log(`
object literals

`)

// object literals
function addressMaker(city, state) {

    // object literals helps us to not assign the same key and value to an object but instead we can just write the same key and value

    const newAddress = { city, state };
    console.log(newAddress.city, newAddress.state)
    console.log(newAddress) // view objects 

}

addressMaker('Austin', 'Texas')

// another example 
function addressMaker1(address) {

    const { city, state } = address // reference it to the parameter

    const newAddress = {
        // here we don't need to write the key and value because we already have the same key and value in the parameter
        city,
        state,
        country: "USA",
    };

    // invoke the city by the key name
    console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`)
}

addressMaker1({ city: 'Austin', state: 'Texas' })

console.log(` 
For of loop

`)

let incomes = [50000, 60000, 100000]
let total = 0

// for of loop helps us to iterate through an entire array of iterables
for (let income of incomes) {
    total += income
}
console.log(total)


let friends = ["jason", "jaycon", "philipp",]
for (const friend of friends) {
    console.log(friend)
}

// the same us the for loop
// for (let i = 0; i < incomes.length; i++) {
//     total += incomes[i]
// }

console.log(`
for of loop - challenge

`)

const students = [
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris" },
    { name: "Kate", city: "Sidney" }
]

for (const student of students) {
    // the student constant here represents the array of objects in the students array
    console.log(`${student.name} lives at ${student.city}`)
}


console.log(` 
Spread operator

`)

let contacts = ["Mary", "Joel", "Danny"]
// let personalFriends = contacts -  this will not work because it will just copy the reference of the contacts array to the personalFriends array (Referencing a type)

// spread operator helps us to copy the values of an array to another array without referencing it

// let personalFriends = [...contacts] // separates the contacts values before adding "John"

let personalFriends = ["Jason", ...contacts, "Jaycon"] // adds "Jason" and "Jaycon" to the contacts array

contacts.push("John")


console.log(personalFriends)

// another example - using object

let person = {
    name: "Christian",
    age: 21,
    city: "Cagayan de Oro"
}

let employee = {
    ...person, // copies the values of the person object
    salary: 100000,
    position: "Product Manager"
}

console.log(employee)
console.log(`${employee.name}`); // we can also get the name from the employee object as a copy of the person object

console.log(`
Rest Operator

`)

function add(...nums) {
    // console.log(arguments) // arguments object - it is an array-like object that contains the arguments passed to the function with its index

    // rest operator helps us to get the arguments passed to the function and store it in an array 
    console.log(nums)
}

add(21, 20, 19, 20) // rather than converting the arguments to the array we can use the rest operator to if we don't know how many values we can pass to the function

console.log(`
Arrow functions with other type functions

`)

// known function declaration
function breakFastMenu() {
    return "I'm going to scrambled eggs for breakfast";

}

// anonymous function 
const lunchMenu = function () {
    return `I'm going to eat a pizza for lunch`;
}

// an arrow function
// const dinnerMenu = (branch) => {
//     return `I'm going to eat a stake for dinner at ${branch}`;
// }

// shorter version of an arrow function
const dinnerMenu = (branch, address) => `I'm going to eat a stake for dinner at ${branch} ${address}`

// if we have only one parameter we can remove the parenthesis 
const dinnerMenu1 = food => `I'm going to eat a ${food} at dinner`

console.log(dinnerMenu1("ChickenJoy!"))
console.log(dinnerMenu("Bigbys", "Ayala Malls"))

console.log(`
Default Params

`)

// adding a fall back by using default params as the argument/value if there is no value specified
const leadSinger = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`)
}

leadSinger("Chris Martin");

console.log(`
includes()

`)

// includes() - checks if the value is included in the array

let numArray = [1, 2, 3, 4, 5]
console.log(numArray.includes(2))

console.log(`
Let & Const

`)

const constSample = []

// we can still push to a constant array even if its a constant type 
constSample.push("hello")

// but not when changing the index of an array 
// constSample = 3

// the same thing in objects
const constSampleObj = {}
constSample.firstName = "Christian"

// in const, you can modify an array or object but cannot overwrite its datatype

console.log(constSample)
console.log(constSampleObj)










