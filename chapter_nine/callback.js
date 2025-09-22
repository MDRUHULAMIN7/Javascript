function sample(a, b,cb) {
  var c = a + b;
  var d = a - b;
  return cb(c, d);
}

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}


console.log(sample(5, 8, sub))
console.log(sample(2, 4, sum))
console.log(sample(2, 4, function (a, b) {
    return a * b;
}))
