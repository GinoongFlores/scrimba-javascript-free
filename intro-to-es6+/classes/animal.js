export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;

    }

    // define functions or methods in this way
    makeNoise(sound = 'Noise') {
        console.log(sound)
    }

    // the get method returns the value of the property
    get metaData() {
        // the getters treats this method as a property on our object
        return `Type: ${this.type}, Legs: ${this.legs}}`
    }

    // the static method can be called without creating an instance of the class
    static return10() {
        return 10;
    }

}

export class Cat extends Animal {
    constructor(type, legs, tail) {
        super(type, legs); // the super method gets the properties of the parent class
        this.tail = tail;
    }

    // Override the makeNoise method from the parent class
    makeNoise(sound = "Meow") {
        console.log(sound)
    }
}


// Classes - challenge
export class Player {
    constructor(playerName, country) {
        // these are properties inside the constructor
        this.playerName = playerName;
        this.country = country
    }

    typeOfSport(sport = "Basketball") {
        return sport
    }


    get playerInfo() {
        return `${this.playerName} was born in ${this.country}`
    }
}

export class TennisPlayer extends Player {
    constructor(playerName, country, age) {
        super(playerName, country); // the super method gets the properties of the parent class
        this.age = age;
    }

    typeOfSport(sport = "Tennis") {
        return sport
    }

    get playerInfoTennis() {
        return `${this.playerName} is ${this.age} years old and knows how to play tennis. He was born in ${this.country} and he plays ${this.typeOfSport()}`
    }

}




