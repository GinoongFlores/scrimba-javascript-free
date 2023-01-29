import { Animal, Cat, Player, TennisPlayer } from './animal.js'

// import the animal class and create a new instance of it with the new keyword and pass in the values based on the classes properties
let dog = new Animal('Dog', 4);

// change values 
dog.legs = 3;

// call the makeNoise method 
dog.makeNoise("Aww Aww!") // change the default value of the sound parameter

console.log(dog.legs) // we can also get the legs property from the animal class

console.log(`
Static methods

`
)

// call the static method
console.log(Animal.return10())


console.log(`
    Getters
    `
)

// calling the getter method (metaData)
console.log(dog.metaData) // print the dog values by calling the metaData getter method

console.log(`
Cat extends Animal

`)
// create a new instance of the cat class 
let myCat = new Cat('Cat', 4, 1)

myCat.makeNoise();

// we can call the metaData getter method from the animal class because the cat class extends the animal class
console.log(myCat.metaData)

console.log(`
Classes - challenges

`)

// Classes - challenge

const playerDetails = new Player('Messi', 'Argentina')
console.log(`${playerDetails.playerInfo} and he plays ${playerDetails.typeOfSport("Soccer")}`)

// we should based the values of the properties of the class on the order of the constructor's parameters
const tennisPlayerDetails = new TennisPlayer("Rafael Nadal", "Spain", 34)
console.log(tennisPlayerDetails.playerInfoTennis)

// call the tennisPlayer method
playerDetails.typeOfSport("Tennis")





