
// const are cannot be reassigned to a new value

// Methodology: If possible, use const. If not, use let. 

let myLeads = []
const inputBtn = document.querySelector('#input-btn')
const inputEl = document.querySelector('#input-el')
const ulEl = document.querySelector('#ul-el')



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


