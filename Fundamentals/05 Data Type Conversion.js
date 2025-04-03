let num = 1234;
let str = num.toString();

// console.log( typeof str);

let strTwo = '3232';
// console.log(parseInt(strTwo))
// parseInt always convert initial value into number 
// if its not a number value then it return NaN ( not a number)

console.log(Number(strTwo));
// Number methods always need a pure number value else it will return NaN 

console.log(Number(false));
console.log(parseInt(false));