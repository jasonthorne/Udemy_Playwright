var myVar = "my var"; //global scope
let myLet = 333; //block scoped
const myConst = "my const"; //block scoped

console.log(myVar,",", myLet,",", myConst);

myVar = "my var 2";
myLet = 999;

console.log(myVar,",", myLet,",", myConst);