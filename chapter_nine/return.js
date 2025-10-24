function greet(msg){
    function greetings(name){
        return msg + ", " + name + "!"
    }
    return greetings
}

var gm = greet("Good Morning")
var gn = greet("Good Night")
// console.log(typeof gm)
console.log(gn("Ruhul Amin"))
var msg = gm('Ruhul Amin')
console.log(msg)

// akhane greet akta function jeta msg parameter nei greet ar vitore arekta function define kora hoase jetar name greetings ata name parameter nei 
//* akhane greetings ar vitore msg use kora hoase but msg to define korai nei . mane holo greeting function tar bairer msg use korese ar atake bola hoi * closure * . akhane jokhon greetings return kora hbe tokhono ata closure ar jonno greet ar parameter ba local variable ar man dhore rakhbe ba mone rakhbe . 

// arpor gm variable a greet call kora holo msg a good morning pass kore .freet function return kore greeting function  refrence mane holo akhane gm o akta function hoa gelo jeta greet function ar parameter dhore rakhe 

//Ai jonno jokhon gm call kora hoi tokhon muloto greetings call kora hoi karon gm a jokhon greet call kora hoasilo tokhon seta greetings function reurn koresilo and oikhane se gree ar parameter dhore rekhesilo 

// Summary `greet` ekta function ja onno ekta function (`greetings`) return kore.

// Jokhon tumi `greet("Good Morning")` call koro, tokhon `greet` function ta `greetings` ke return kore, ar oi `greetings` function er moddhe `msg = "Good Morning"` mone rekhe dey — eta ke **closure** bola hoy.

// Pore jokhon tumi `gm('Ruhul Amin')` call koro, tokhon oi `greetings` function ta age theke mone rakha `msg` use kore output dei:
// **"Good Morning, Ruhul Amin!"**

function base(b){
    return function(n){
        var result = 1
        for(var i = 0;i < b; i++ ){
            result *=n
        }
        return result;
    }
}

var base10 = base(10);
console.log(base10(2))
var base3 = base(3)
console.log(base3(2))

// base ekta function ja ekta number b ney, ar return kore arekta function ja n ney.base function ekta closure create kore je b er man mone rakhe, ar porer function ta oi b use kore n ke b bar gun kore result dey

// Return kora function ta n ke b bar gun kore 

// Jokhon tumi var base10 = base(10) koro, tokhon base10 ekta function hoy je b = 10 mone rekhe dey (closure).

// Tarpor base10(2) mane hocche 2 ke 10 bar gun kora → 2¹⁰ = 1024

// Jokhon tumi var base2 = base(2) koro, tokhon b = 2 mone rakhe.

// Tarpor base2(3) mane hocche 3 ke 2 bar gun kora → 3² = 9