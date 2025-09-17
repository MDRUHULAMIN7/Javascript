var addition = function(a, b) {
  return a + b;
}

addition(22, 20)


setTimeout(function () {
    console.log('hello world after 5 second')
}, 5000)


var another = addition

console.log(another(22, 20))
