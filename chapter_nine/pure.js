// What is Pure Function ?

//it returns the same output/result for the same input/arguments
// it does not change the original value of the input/arguments
// it dose not cause any observable side effects

function sqr(n) {
    
    return n*n
}

// console.log(sqr(5)) 

var n = 10 

function change(){
     n=100
}

change()

console.log(n)

var point = {
    x: 10,
    y:30
}

function printPoint(point){
    point.x = 100
    point.y = 200

    console.log(point)
}

printPoint(point)
