//** Array **//



//**What is Array **//

//Array is a data structure where we can organise multiple data under a single variable

//**Array Declaration **//

//1. Array Literal // aquare bracket

let arr1 = [1,2,3,4,5];
arr1[10] = 100; // add value at index 10, creates empty slots in between
console.log(arr1); // [1,2,3,4,5,empty×5,100]
console.log(arr1.length); // 11 → length includes empty slots
console.log(arr1[1]); // access second element → 2
console.log(typeof(arr1)); // object → array is object

// Array using Constructor
let arr2 = new Array(1,2,3,4,5); // creates array
console.log(arr2); // [1,2,3,4,5]
console.log(typeof(arr2)); // object