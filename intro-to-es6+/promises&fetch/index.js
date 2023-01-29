// A promise is an object that represents the eventual completion or failure of an asynchronous operation
// A promise also used to fetch a data from an API or a database or used it asynchronous function to run


/* 

As an example, let's say we want to buy a flight ticket from an airline company. We are making a deal in the company, the company will tell us that if we have a successful payment then we will reserve you a set if not we be able to reserve you a set.
*/

const buyFlightTicket = () => {

    // the three possible outcome of the promise is: Pending, Successful, Rejected

    return new Promise((resolve, reject) => { // our promise is a function that takes two parameters: resolve and reject
        setTimeout(() => { // setTimeOut to 3s 
            const error = false; // we set the error to false if the payment was unsuccessful

            if (error) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful")
            }

        }, 3000)

    })
}

// we can call the promise function by using the then and catch method
buyFlightTicket()

    // the success as a placeholder represents the resolve parameter in the promise function
    .then((success) => console.log(success)) // the then method will be called if the promise is successful

    // the error as a placeholder represents the reject parameter in the promise function
    .catch((error) => console.log(error)) // the catch method will be called if the promise is rejected


console.log(`
Challenge: Promise

`)

// const userData = () => {
//     return new Promise((resolve, reject) => {

//         const error = false; // set the error to false if the user data is not found

//         if (error) {
//             reject("Sorry, your user data was not found")
//         } else {
//             resolve(
//                 user = {
//                     name: "Christian Paul",
//                     age: 21,
//                     country: "Philippines"
//                 }
//             )
//         }

//     })
// }

// another way to call the promise function

const userData = new Promise((resolve, reject) => {
    const error = false;

    if (error) {
        reject('Sorry, your user data was not found')
    } else {
        resolve({
            name: "Christian Paul",
            age: 21,
            country: "Philippines"
        });
    }
})

// here the only difference is that we call the userData 
userData
    .then((data) => console.log(data))
    .catch((error) => console.log(error))




