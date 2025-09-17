var obj = {
    a: 100,
    b: 200,
    c: 300
}

//console.log('a' in obj) // true // check property exist or not by in operator
//console.log('d' in obj) // false

for (var i in obj) { // by for in loop get property key and value
    console.log(i) // a, b, c
    console.log(obj[i]) // 100, 200, 300
}

