// primitive 

// Primitive Data Types are Defined by Javascript

// Number
// 2 4 5.5 

// String
// 'hello' "hello" `fffff`
// '12' "12"
// '12.5' "12.5"

// Boolean
// true or false

// Null
// null

// undefined
// undefined

// object
// Object Data Types are Defined by From Primitive Data Type That We can Define in my way 

// Array
// Object
// Function

// #####    Number #######//

// var n = 1451;

// var f = 14.51;

// var nn = Number('123.44');
// console.log(nn)
//  convert string into number
// console.log(Number.parseFloat(nn))
// console.log(Number.parseInt(nn))
// parseInt() method converts a string to an integer.
// parseFloat() method converts a string to a floating point number.

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(1/0)  // Infinity
// console.log(-1/0) // -Infinity
// console.log(Number.NaN) // Not a Number
// console.log("abc" * 10) //return Nan


// #####   String  #######//

// Anything that we  write wrapped in quotes is a string

// var str = "string"
// var str2 = 'string2'
// var str3 = `string3`
//declare string by literal

//  var str4 = String(123)
//  var str5 = String(true)
//  var str6 = String(null)
//  var str7 = String(undefined)
//  var str8 = String(NaN)
//  var str9 = String(123.456)
//  var str10 = String('123.456')
 //declare string by String Constructor

//  console.log(str10,str,str2,str3,str4,str5,str6,str7,str8,str9)



// #####   Boolean  #######//

// var b1 = true;
// var b2 = false;

// var b3 = Boolean(123); true
// var b4 = Boolean('123'); true
// var b5 = Boolean(''); false
// var b6 = Boolean(null); false
// var b7 = Boolean(undefined); false
// var b8 = Boolean(NaN); false
// var b9 = Boolean(0); false
// var b10 = Boolean(-0); false
// var b11 = Boolean(1); true
// var b12 = Boolean(-1); true

// console.log(b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12)


// #####   Null vs undefined  #######//

// var abc  // we not assign any value to it

// var xyz = null; //there is no value but we assign it

// console.log(abc)
// console.log(xyz)

// ** hexadecimal and octal number system **//

var hex = 0xFF; //255
var oct = 0o77; //63
console.log(hex)
console.log(oct)