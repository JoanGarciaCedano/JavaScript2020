// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10 , 1 , 5)

console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText('Andrew')
console.log(scoreText)

// Challenge Area
// total, tipPercent, 
let tip = function (total = 0, tipPercent = 0.1) {
    return total * tipPercent
}

let resultTip = tip(100, 0.5)

console.log("The tip was: $" + result)

//mir-suic-slwfst- dan-rid-io- zul-lif-slw- jos-do-fst guz-dee-hrd