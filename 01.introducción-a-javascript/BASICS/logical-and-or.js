let temp = 65

// if (temp >= 60) {
//     if(tmep <= 90) {
        
//     }
// }

// Logical And Operator - Ture if both sides are true. False otherwise
// Logical Or Operator - True if  at least one side is true. False otherwise

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh. Do what you want')
}

// Challenge Area

let isGuestOneVegan = true
let isGuestTwoVegan = false

// Are both vegan? Only offer up vegan dishes
if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes.')
}else if (isGuestOneVegan | isGuestTwoVegan){
    console.log('Make sure to offer up some vegan options.')
}else{
    console.log('Offer up anything on the menue')
}