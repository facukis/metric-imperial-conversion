/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

document.addEventListener("DOMContentLoaded", function() {
    let buttonEl = document.getElementById("convertButton");

    function convertUnits (value) {
        let metersToFeet = value * 3.281;
        let feetToMeters = value / 3.281;
        let litersToGallons = value * 0.264;
        let gallonsToLiters = value / 0.264;
        let kilogramsToPounds = value * 2.204;
        let poundsToKilograms = value / 2.204;

        document.getElementById("outputValue1").textContent = `${value} meters = ${metersToFeet.toFixed(3)} feet | ${value} feet = ${feetToMeters.toFixed(3)} meters`;
        document.getElementById("outputValue2").textContent = `${value} liters = ${litersToGallons.toFixed(3)} gallons | ${value} gallons = ${gallonsToLiters.toFixed(3)} liters`;
        document.getElementById("outputValue3").textContent = `${value} kilos = ${kilogramsToPounds.toFixed(3)} pounds | ${value} pounds = ${poundsToKilograms.toFixed(3)} kilos`;
    }

    buttonEl.addEventListener("click", function() {
        const value = document.getElementById("inputValue").value;
        convertUnits(value);
    });
});