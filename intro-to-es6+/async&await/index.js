
// async & await

// example: you have an instagram account and there are no photos on it so you want to upload something on it

// synchronous in JavasScript, is when JavaScript read each line of code line-by-line from the top to bottom or when you have to wait for a task to be completed before moving on to the next task. 

const photos = [];

// we turn the function into an asynchronous function to not wait for the first task before moving on to the next task
const photoUpload = async () => {
    // uploadStatus is the time or status of the photo upload. And this returns a promise 

    let uploadStatus = new Promise((resolve, reject) => {
        const status = false

        if (status) {
            reject("Photo Upload Failed")
        } else {

            setTimeout(() => {
                photos.push("Profile Pic");
                resolve("Photo Uploaded") // the resolve will store on the variable uploadStatus

                console.log(photos.length)
            }, 3000)
        }

    })

    uploadStatus
        .then((success) => console.log(success))
        .catch((error) => console.log(error))

    // await means were not going to the next line after this code until this promise is resolved
    // let result = await uploadStatus;

    // when we logs out the promise and the array's length, it should wait the result variable resolve first before moving on this line of code
    // console.log(result);
    // console.log(photos.length);


}

photoUpload();

// If we don't add an async and await on the photoUpload function then JavaScript will do read the code Synchronously in a way that it will skipped the uploadStatus because it has a 3s setTimeOut to resolve but JavaScript will not wait on it and just read the next line of code which logs out the promise and the empty array's length. 

// Challenge

const apiURL = "https://api.chucknorris.io/jokes/random";

const randomJoke = async () => {

    // here, we should add an await on each variable to get a specific object on the API because if not it will give us an error of 'response.json' is not a function as javascript will just log data without checking it 
    const response = await fetch(apiURL)
    const data = await response.json();
    console.log(data.value); // to get a specific object on the API we can add .value or based on the API's links objects like (data.value)

}

randomJoke();