//tuple: array where each element's type is defined.
//each element is therefore TYPESAFE. (Main difference to arrays).
//also cant add new elements (only change existing).

let tuple1: [string, number] = ['str1', 1];

let tupleStr: string = tuple1[0];
let tupleNum: number = tuple1[1];

console.log(tupleStr, tupleNum);

tuple1[0] = 'str2';
tuple1[1] = 2;

console.log(tuple1);