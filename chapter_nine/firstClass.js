// First Class Functions

function add(a, b) {
    return a+b
}

// 1. Function  can be stored in a Variable

const sum = add(2,4)
console.log(sum, typeof sum) 

// 2. A Function can be stored in a Object
var obj = {
    sum : add
}
console.log(obj)
console.log(obj.sum(2,4))
// 3. A Function can be stored in a Array

var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](2, 4))

// 4.A We can create Function as Need

setTimeout(function () {
    console.log('hello world')
}, 1000)
// 5. A Function can be passed as a Argument
// 6.We can return Function from another Function