var obj = {
  a: 100,
  b: 200,
  c: 300,
};

//console.log(Object.keys(obj)) // ['a', 'b', 'c'] // get all property key in array
//console.log(Object.values(obj)) // [100, 200, 300] // get all property value in array
//console.log(Object.entries(obj)) // [['a', 100], ['b', 200], ['c', 300]] // get all property key value pair in array

var obj2 = Object.assign(obj)
console.log(obj2) // {}
obj2.a = 2300
obj2.d = 400
console.log(obj2) // {a: 2300, b: 200, c: 300, d: 400}
