                    //*** Object  ***/

//*** What is  Object ? ***/

//Object is a collection of key value pairs.


              // declare object by literal //
//var obj = {
    // name: 'Ruhul',
    // age: 25,
    // city: 'Dhaka'
//}
//obj.x = 100
//console.log(obj) // object // {x: 100}
var point = {
  x: 100,
  y: 200,
};

/*
point.z = 300
console.log(point) // {x: 100, y: 200, z: 300}
console.log(point.x); // access obj property by dot notation 
console.log(point['x']); // access obj property by bracket notation

var show = 'x'
console.log(point[show]) // access obj property by bracket notation

          // declare object by object constructor //

var obj2 = Object();
obj2.a = 100;
console.log(obj2) // {a: 100}


var obj3 =new Object();
obj3.a = 7100;
console.log(obj3) // {a: 7100}
*/

point.x = 45
point.a = 16
console.log(point)
console.log(point.d)

point['y'] = 100

var prop = 'z'
point[prop] = 300
console.log(point)

delete point.x
console.log(point)



