// Lexical Scope (Static Scope)
// Global Scope - Defined outisde of all code blocks
// Local Scope - Defined inside a code block

let varOne ='varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
}

console.log(varTwo)