
function add(a, b) {
    return a+b
}

function manipulate(a, b, func) {
    
    var c = a + b 
    var d = a - b
    
    function multipy() {
        var m = func(a, b)
        
        return c*d*m
    }
     return multipy
}

var multipy = manipulate(3, 4, add)
console.log(multipy())