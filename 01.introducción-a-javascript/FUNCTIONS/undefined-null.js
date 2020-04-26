//Undefined for variable
let name

if (name === undefined) {
    console.log("La variable name está sin valor")
} else {
    console.log("La variable name tiene el valor: " + name)
}

//Undefined for function arguments
let square = function(num){
    console.log(num)
}

square()