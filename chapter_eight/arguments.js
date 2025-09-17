// function add(a, b) {
//     var result = a + b;
//     console.log(result);
// }

// add(10, 20)

// var arr1 = [1,2,3]
// var arr2 = [4,5,3]
// var arr3 = [9, 6, 3]

// var sum = 0

// for(var i = 0; i < arr1.length; i++){
//     sum += arr1[i]
// }

// // console.log(sum)

// function sumArray(arr){
//     var sum = 0
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum);
// }

// sumArray(arr3)
// sumArray(arr2)
// sumArray(arr1)


function test() {
  console.log(arguments); // javascript arguments object keyword //[Arguments] { '0': 10, '1': 20, '2': 30 }
//   console.log(JSON.stringify(arguments));
    //   console.log(typeof a);
    for (var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}
test(10,20,30)