
// const are cannot be reassigned to a new value

// Methodology: If possible, use const. If not, use let. 

let myLeads = []

const inputBtn = document.querySelector('#input-btn')
const inputEl = document.querySelector('#input-el')
const ulEl = document.querySelector('#ul-el')
const deleteBtn = document.querySelector('#delete-btn')
const tabBtn = document.querySelector('#tab-btn')

// Get the leads from the localStorage with JSON.parse()
// the values for this array could be the ["lead1", "lead2"] or null
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// 1. Check if leadsFromLocalStorage is truthy
// console.log(leadsFromLocalStorage)
// 2. If so, set myLeads to its value(leadsFromLocalStorage) and call renderLeads()

// Checking localStorage before rendering - if there are leads (truthy) in localStorage, render them. If null, don't render anything 
if (leadsFromLocalStorage) { // this returns to true if the localStorage has has a value, if null it returns false and ignore the code block  
    myLeads = leadsFromLocalStorage
    render(myLeads)

}


function render(leads) {

    // the listItems variable will hold all the HTML list items elements
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {

        // Older method
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        // console.log(listItems)

        // Newer method using template strings/literals and it's easier to read and write like an HTML structure
        listItems += `
                    <li> 
                        <a target='_blank' href='${leads[i]}'>
                        ${leads[i]}
                        </a>
                    </li>
                    `

    }

    // Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems

}

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)

    // clear the input value after every input submission
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

})

tabBtn.addEventListener("click", function () {

    // get the link from the current tab
    // here we have the tabs(object) with the tabs key which is also an object with a query method
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

})


deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads) // just call the render with myLeads as an argument to clear the list
})


