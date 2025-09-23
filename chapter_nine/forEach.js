//forEach main array ke change kore

var arr = [1, 2, 3, 4, 5]

var sum = 0
// arr.forEach(function (value, index, arr) {
//     // console.log(value, index, arr)
//     sum = sum + value
// })



function forEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr); // value, index, arr পাঠাচ্ছি
  }
}

forEach(arr, function (value) {
  sum += value;
});

console.log(sum);

forEach(arr, function (value, index, arr) {
   arr[index] = value +5
})

console.log(arr)
