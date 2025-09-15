// Traverse Array Example

var arr = [1, 2, 3, 4, 9]; // একটি array ডিক্লেয়ার করা হলো

// Example 1: প্রতিটি element কে 2 যোগ করে print করা
// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + 2;   // প্রতিটি index এর value এর সাথে 2 যোগ হবে
//     console.log(arr[i]);   // নতুন value console এ print হবে
// }

// Example 2: Array এর সব element এর যোগফল বের করা
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; // প্রতিবার loop এ sum এর সাথে arr[i] যোগ হবে
}
console.log(sum); // সবগুলোর যোগফল → 19

// Example 3: Even number check
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) { // যদি ভাগ করলে 2 দিয়ে ভাগশেষ 0 হয় → even
        console.log(arr[i] + ' is even');
    }
}

// Example 4: Odd number check
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) { // যদি ভাগ করলে 2 দিয়ে ভাগশেষ 0 না হয় → odd
        console.log(arr[i] + ' is odd');
    }
}
