function add(a, b) {
    var result = a + b;
    console.log(result);
}

add(10, 20)

var arr1 = [1,2,3]
var arr2 = [4,5,3]
var arr3 = [9, 6, 3]

var sum = 0

for(var i = 0; i < arr1.length; i++){
    sum += arr1[i]
}   

// console.log(sum)

function sumArray(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum);
}

sumArray(arr3)
sumArray(arr2)
sumArray(arr1)
