// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10 , 1 , 5)

console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    console.log(name)
    console.log(score)
}

getScoreText()