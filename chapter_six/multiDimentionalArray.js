// Multi Dimentional Array

var arr = [
[77,81,72],
[80,75,69],
[70,85,72]
]

// console.log(arr[0][0])
// console.log(arr[1][2])

for(var i=0; i< arr.length;i++){
    for( var j =0; j<arr[i].length; j++){
        console.log("Row",i,"Column",j,arr[i][j])
    }
}