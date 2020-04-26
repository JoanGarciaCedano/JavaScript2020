//convertFahrenheitToCelsius

//Global scope (fahrenheit, celsius, kelvin, valueCelcius, valueKelvin)
 //Local scope (fahrenheit, result, result)
   //Local scope (isFreezing)

let fahrenheit = 32; // 0c - 273.15k
let celsius = function (fahrenheit) {
    let result = (fahrenheit - 32) * 5 / 9

    if(result <= 0){
        let isFreezing = true
    }

    return result
}

let kelvin = function (fahrenheit) {
    let result = (fahrenheit + 459.670) * 5 / 9
    return result
}

let valueCelcius = celsius(fahrenheit)
console.log(valueCelcius + "C")
let valueKelvin = kelvin(fahrenheit)
console.log(valueKelvin + "k");
