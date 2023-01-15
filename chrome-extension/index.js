
// const are cannot be reassigned to a new value

// Methodology: If possible, use const. If not, use let. 

let myLeads = []
const inputBtn = document.querySelector('#input-btn')
const inputEl = document.querySelector('#input-el')
const ulEl = document.querySelector('#ul-el')
const deleteBtn = document.querySelector('#delete-btn')
const tabBtn = document.querySelector('#tab-btn')



inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)

    // clear the input value after every input submission
    inputEl.value = ""
    renderLeads()

})

function renderLeads() {

    // the listItems variable will hold all the HTML list items elements
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {

        // Older method
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        // console.log(listItems)

        // Newer method using template strings/literals and it's easier to read and write like an HTML structure
        listItems += `<li> 
                        <a target='_blank' href='${myLeads[i]}'>
                        ${myLeads[i]}
                        </a>
                    </li>`

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


