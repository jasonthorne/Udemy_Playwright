
//array literal:
const strArray: string[] = ['str1', 'str2', 'str3'];

//creating using obj of array class (using it's constructor):
const numbArray: number[] = new Array(1,2,3);

//init empty array:
const emptyArray: string[] = []; 

//------

//console.log(strArray[0]);

strArray.push('str4'); //add to end of list
console.log(strArray);

strArray.pop(); //removes LAST element
console.log(strArray);

strArray.shift(); //removes FIRST element
console.log(strArray);

strArray.unshift('I be first'); //adds as FIRST element
console.log(strArray);

console.log(strArray.slice(0,strArray.length)); //copy of array
console.log(strArray);

console.log(numbArray);
const mappedArray = numbArray.map((num)=>num*2);
console.log(mappedArray);

const filteredArray = numbArray.filter((num => num>1));
console.log(filteredArray);

//read only array (no changes to values allowed )+++++++++++++++++:
const readOnlyArray: readonly number[] = [1,2,3];


