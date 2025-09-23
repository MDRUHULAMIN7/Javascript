// map main array theke notun array banai and oitate change kore 
var arr = [1, 2, 3, 4, 5]

var aqrArr = arr.map(function (value) {
    
    // return Math.random() * 100 ss
    return value * 2
})

console.log(arr)
console.log(aqrArr)

function map(arr,cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++){
        var temp = cb(arr[i],i,arr)
        newArr.push(temp)
    }
    return newArr
}
 
var qb = map(arr,function (value) {
    return value * 2
})

// console.log(map(arr))

console.log(qb)