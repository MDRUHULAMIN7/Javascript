// javascript a seystem ta data gula variable  store kore thake segulake bole scope
console.log(x)
var x = 55

function test(){
var x = 44
console.log(x,'s')
  function nested(){
    var y =33
    console.log(x)
  } 
    // console.log(y)
    nested()
}
console.log(x)


test()
// bangla kothai function scope mane holo { boundary ar vitore kiso declare korle ar baire theke access hbe na  }

// ** Lexical Scope ** //

/* aikhane nested function jokhon kono value khoje tokhon tar scope na pele tar parent kase jai sekhane na pele tar parent ar kase jai aije prossecc possible hoi lexical scope ar karone .

/*JavaScript e function scope mane holo, jokhon kono variable function er vitore declare kora hoy, oi variable ta sudhu oi function er vitorei access kora jay — function er baire theke dekha jay na. Function scope er ekta nijer alada environment thake, jekhane tar nijer variable gula store thake.

Ekhon ei code ta niye bujha jak — jokhon test() function call kora hoy, tokhon JavaScript ekta new execution context create kore sudhu oi function er jonno. Ei context er vitore jodi var x = 44 declare kora thakto, tahole oi x sudhu function er vitorei kaj korto, baire theke access kora jeto na. Kintu ei example e function er vitore var x comment kora ache, mane oi scope er moddhe x declare kora hoy nai. Tai JavaScript oi x variable khuje bairer (global scope) e jay, ar sekhane x = 55 peye jay. Tai function er vitore console.log(x) dile output hoy 55.

Eita holo function scope er main concept — function er vitore declare kora variable baire theke dekha jay na, ar function vitore jodi na thake, tahole JavaScript global scope theke value ney. Ei rule e JS er variable access system kaj kore.*/


var a = 11
function A(){
    var b = 12
    function B(){
        var c = 23
        console.log(c)
    }

    function C(){
        var d = 56
         console.log(d)

    }
    console.log(b)
    D(b)
    B()
    C()
}

function D(n){
    return n+a
}

// A -> a,b,B(),C(),D()
// B -> a,b,c,B(),C(),D()
// C -> a,b,c,B(),C(),D()
// D -> a,n,A()

// aikhane amra dekhte passi scope chain ke kake access korte parse