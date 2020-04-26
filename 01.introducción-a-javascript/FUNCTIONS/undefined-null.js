//Undefined for variable
let name

if (name === undefined) {
    console.log("La variable name está sin valor")
} else {
    console.log("La variable name tiene el valor: " + name)
}

//Undefined for function arguments
//Undefined as function return default value
let square = function(num){
    console.log(num)
}

let result = square()
console.log(result)

//
let age = 27

console.log(age)

age = undefined

console.log(age)