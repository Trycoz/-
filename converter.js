
function convertUnit(value) {
    let results = {}
    const unitNumber = Number(value)
    results.meterToFeet = (unitNumber * 3.280839895).toFixed(3)
    results.feetToMeter = (unitNumber * 0.3048).toFixed(3)
    results.literToGallon = (unitNumber * 0.2641720524).toFixed(3)
    results.gallonToLiter = (unitNumber * 3.785412).toFixed(3)
    results.kilosToPounds = (unitNumber * 2.2046226218).toFixed(3)
    results.poundsToKilos = (unitNumber * 0.45359237).toFixed(3)

    return results
}

function showUnits() {

    const inputValue = document.getElementById("unitToConvert").value
    resultsObject = convertUnit(inputValue)
    document.getElementById("cardsConvertions").innerHTML =
        `
        <div class="cardContent">
          <h5>Length (Meter/Feet)</h5>
          <h6>${inputValue} meters = ${resultsObject.meterToFeet} feet | ${inputValue} feet = ${resultsObject.feetToMeter} meters</h6>
        </div>
        <div class="cardContent">
          <h5>Volume (Liters/Gallons)</h5>
          <h6>${inputValue} liters = ${resultsObject.literToGallon} gallons | ${inputValue} gallons = ${resultsObject.gallonToLiter} liters</h6>
        </div>
        <div class="cardContent">
          <h5>Mass (Kilograms/Pounds)</h5>
          <h6>${inputValue} kilos = ${resultsObject.kilosToPounds} pounds | ${inputValue} pounds = ${resultsObject.poundsToKilos} kilos</h6>
        </div>
    `

}

