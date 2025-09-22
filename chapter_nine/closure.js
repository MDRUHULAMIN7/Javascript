// Closure

// 1. A Closure is a function that has access to the parent scope, even after the parent function has closed.
// jodi kono scope ar vitore bairer kono scope thgeke data ase tahole setai closure

var b = 10

function a() {
    
    var x = 100

    return function () {
        console.log(x)
    }
}

var abc = a()
console.dir(abc)

// aikhane x er value  return function ar vitore use hosse tokhon sea closuire hoan jasse 