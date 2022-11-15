
function convertUnit(value) {
    let results = {}
    const unitNumber = Number(value)
    const intBool = Number.isInteger(unitNumber)
    results.meterToFeet = (unitNumber * 3.280839895).toFixed(3)
    results.feetToMeter = (unitNumber * 0.3048).toFixed(3)
    results.literToGallon = (unitNumber * 0.2641720524).toFixed(3)
    results.gallonToLiter = (unitNumber * 3.785412).toFixed(3)
    results.kilosToPounds = (unitNumber * 2.2046226218).toFixed(3)
    results.poundsToKilos = (unitNumber * 0.45359237).toFixed(3)

    return [results, intBool]
}

function showUnits() {

    let inputValue = document.getElementById("unitToConvert").value
    const resultsObject = convertUnit(inputValue)
    console.log(resultsObject)
    if (resultsObject[1]) {

        document.getElementById("cardsConvertions").innerHTML =
            `
            <div class="cardContent">
              <h5>Length (Meter/Feet)</h5>
              <h6>${inputValue} meters = ${resultsObject[0].meterToFeet} feet | ${inputValue} feet = ${resultsObject[0].feetToMeter} meters</h6>
            </div>
            <div class="cardContent">
              <h5>Volume (Liters/Gallons)</h5>
              <h6>${inputValue} liters = ${resultsObject[0].literToGallon} gallons | ${inputValue} gallons = ${resultsObject[0].gallonToLiter} liters</h6>
            </div>
            <div class="cardContent">
              <h5>Mass (Kilograms/Pounds)</h5>
              <h6>${inputValue} kilos = ${resultsObject[0].kilosToPounds} pounds | ${inputValue} pounds = ${resultsObject[0].poundsToKilos} kilos</h6>
            </div>
        `
    } else {
        document.getElementById("unitToConvert").value = 0
        showUnits()
    }

}

