const convertBtn = document.getElementById('btn-convert')
const inputUnit = document.getElementById('unit-number')


inputUnit.style.width = "117px"
inputUnit.style.height = "98px"

inputUnit.addEventListener("input", function () {
    const inputValue = inputUnit.value

    inputUnit.style.width = inputValue.length > 0 ? (inputValue.length * 117) + "px" : "117px"
    if (inputUnit.clientWidth > 500) {
        inputUnit.style.maxWidth = "500px"
    }
})

// get unit types
const convertLength = document.getElementById('convert-length')
const convertVolume = document.getElementById('convert-volume')
const convertMass = document.getElementById('convert-mass')

/*  
    ! Goal 

 * Every time the user clicks the convert button, the length, volume, or mass will be converted to each type of each conversion based on the user's input

    ! Conversion for the three converter
    * 1 meter = 3.281 feet 
    * 1 liter = 0.264 gallon  
    * 1 kilogram = 2.204 pound

*/

convertLength.textContent = ""
convertVolume.textContent = ""
convertMass.textContent = ""

convertBtn.addEventListener("click", function () {

    const unit = inputUnit.value
    const parseUnit = parseFloat(unit)

    const meters = Number(parseUnit * 3.281).toFixed(3)
    const feet = Number(parseUnit / 3.281).toFixed(3)

    // liters & gallons
    const liters = Number(parseUnit * 0.264).toFixed(3)
    const gallons = Number(parseUnit / 0.264).toFixed(3)

    // kilograms & Pounds
    const kilograms = Number(parseUnit * 2.204).toFixed(3)
    const pounds = Number(parseUnit / 2.204).toFixed(3)

    const lengthConversion = `${unit} meters = ${meters} feet | ${unit} Feet = ${feet} meters`

    const volumeConversion = `${unit} liters = ${liters} gallons | ${unit} Gallons = ${gallons} liters`

    const massConversion = `${unit} kilograms = ${kilograms} pounds | ${unit} pounds = ${pounds} kilos`

    convertLength.textContent = lengthConversion
    convertVolume.textContent = volumeConversion
    convertMass.textContent = massConversion

})