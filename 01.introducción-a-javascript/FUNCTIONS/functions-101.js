//Function - input (argument.s), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// Challenge Area

//convertFahrenheitToCelsius

let fahrenheit = 32; // 0c - 273.15k
let celsius = function (fahrenheit) {
    let result = (fahrenheit - 32) * 5 / 9
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
