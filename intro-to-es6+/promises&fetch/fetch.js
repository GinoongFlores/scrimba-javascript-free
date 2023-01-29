// Fetch API

console.log(`
Fetch

`)

fetch('https://jsonplaceholder.typicode.com/comments/1') // this returns a promise

    // then method also returns a promise 
    .then(response => response.json()) // the json mapped the body content of it

    // and get the data from the response
    .then(data => console.log(data))


console.log(`
POST

`)

// POST

// the post means that we are sending data to the server
fetch('https://jsonplaceholder.typicode.com/comments/', {
    method: "POST",
    body: JSON.stringify({
        postID: 1,
        name: 'Christian',
        email: 'christian@example.com',
        body: 'This is a post'
    })
})

    .then(response => response.json())
    .then(data => console.log(data)) // the data is the response from the server


// challenge


// GET
fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then((response) => response.json())
    .then((data) => console.log(data))


// POST
fetch('https://jsonplaceholder.typicode.com/comments/', {
    method: "POST",
    body: JSON.stringify({
        postID: 2,
        name: "Paul",
        email: "paul@gmail.com",
    })
})

    .then(response => response.json())
    .then(data => console.log(data))

// from Mozilla MDN Web Docs - Fetch API (POST)
const data = { username: 'example' }; // the data that we want to send to the server
fetch("https://jsonplaceholder.typicode.com/comments/", {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },

    body: JSON.stringify(data)
})

    .then((response) => response.json())
    .then((data) => {
        console.log('Success', data)
    })

    .catch((error) => {
        console.log('Error', error)
    })
