var arr = [2,99,2, 3, 4, 5]

var sum = arr.reduce(function (prev, cur) {
    return prev + cur
}, 100)

var max = arr.reduce(function (prev, curr) {
    return Math.max(prev, curr)
},0)
// console.log(sum)
// console.log(max)
// console.log(max)
// console.log(max)
// console.log(max)
// console.log(max)

function myReduce(arr, cb, acc) {
    
    for (var i = 0; i < arr.length; i++){
        acc = cb(acc,arr[i],arr)
    }
    return acc
}

var sum2 = myReduce(arr,function (prev, curr) {
    return prev + curr
}, 0)

var max2 = myReduce(arr,function (prev, curr) {
    return Math.max(prev, curr)
},0)
var min2 = myReduce(arr,function (prev, curr) {
    return Math.min(prev, curr)
},arr[0])
console.log(sum2)
console.log(max2)
console.log(min2)