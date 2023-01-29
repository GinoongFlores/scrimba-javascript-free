// classes on a single file only

class Player {
    // we need to have the constructor in class to initialize the properties
    constructor(name, country, sport) {
        this.name = name;
        this.country = country;
        this.sport = sport
    }

    playerInfo() {
        console.log(`${this.name} was born in ${this.country} and he plays ${this.sport}`)

        // other way is using the return to logs out the values
        // return `${this.name} was born ${this.country}`
    }
}

const messi = new Player('Messi', 'Argentina', 'Soccer');
messi.playerInfo();

// logs out the values based on the return statement
// console.log(messi.playerInfo());


class TennisPlayer extends Player {
    constructor(name, country, age, sport) {
        // inherited the properties from the parent class
        super(name, country, sport)

        // we only this our age as this is our new properties to be added only on this class
        this.age = age;
    }

    playerInfo() {
        console.log(`${this.name} is ${this.age} years old and knows how to play ${this.sport} and he's from ${this.country}`)
    }
}

const tennisPlayer = new TennisPlayer("Rafael Nadal", "Spain", 34, "Tennis")

tennisPlayer.playerInfo();

