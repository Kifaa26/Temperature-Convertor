function convertTemperature() {
    let conversionType = document.querySelector('input[name="conversionType"]:checked').value;
    let temperature = parseFloat(document.getElementById("temperature").value);
    let result;

    if (conversionType === "celsiusToFahrenheit") {
        result = (temperature * 9/5) + 32;
        document.getElementById("result").innerHTML = result.toFixed(2) + " °F";
    } else if (conversionType === "fahrenheitToCelsius") {
        result = (temperature - 32) * 5/9;
        document.getElementById("result").innerHTML = result.toFixed(2) + " °C";
    }
}

function clearFields() {
    document.getElementById("temperature").value = "";
    document.getElementById("result").innerHTML = "";
}