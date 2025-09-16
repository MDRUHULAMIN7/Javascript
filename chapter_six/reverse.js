// Reverse in Array 

var arr = [1,2,3,4,5,6,7,8,9,10]

var newArr = []

for(var i=0; i<arr.length; i++){
    newArr[i] = arr[arr.length-1-i]
    
}
console.log(newArr)
console.log(arr.reverse())