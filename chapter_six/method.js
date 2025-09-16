var arr = [1,2,3,4,5,6,7,8,9,10]
var arr2 = [14,12,43,24,15,56,57,48,94,40]

//console.log(arr.join(' ')) //1 2 3 4 5 6 7 8 9 10
//console.log(arr.join('-')) //1-2-3-4-5-6-7-8-9-10
//console.log(arr.join('/')) //1/2/3/4/5/6/7/8/9/10
//console.log(arr.join(', ')) //12345678910


//arr.fill(0)
//console.log(arr) // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


//var arr3 = arr.concat(arr2)
//console.log(arr3) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 12, 43, 24, 15, 56, 57, 48, 94, 40]

//console.log(Array.isArray(arr)) // jodi array hoi tahole true return korbe nahole false return korbe




var arr4 = Array.from(arr)
console.log(arr4) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var a =[1,2]
var b =a
var b =Array.from(a)

b[1] = 100
console.log(a) // [1, 100]  aivabe array theke direct array banale pore change korle original array er value change hoye jabe ai Array.form use kora hoi 

