let x = 5, y = 10;

//console.log(x == y); //checks values
//console.log(x === y); //checks values and type

//logical operators:
let isTrue: boolean = true;
let isFalse: boolean = false;

console.log(isTrue && isFalse); //checks both are true
console.log(isTrue || isFalse); //checks if one is true
console.log(!isTrue); //prints opposite of value

//assignment operators:
let num = 5;
num += 3; //num is now 8 (here)
num -= 2;
num %= 3; //num is now 2 (remainder of 5/3 is 2)
//etc..

//ternary operator:
let age = 3;
console.log(age<2? '<2': '>2');
