function a(){
b()
    console.log('i am Function A')
}

function b(){
d()
    console.log('i am Function B')
}
function c(){
    console.log( ' i am Function C')
}

function d(){
    c()
    console.log('i am Function D')
}

var x = 100
a()
//creational phase 
// excutional phase

// Excute A finction context mane globaly je excution hoitesilo seta paused  hoa jabe and A function excute hbe . A function excute hota gia dekhbe tar vitore first arekta function B call kora ase tokhon seta excute hbe function B ar modhe abar function D tokhon seta excute hbe function D ar modhe abar function C tokhon seta excute hbe then ar modhe console log sobar age hbe then console log hbe function D ar tarpor tarpor function B ar then function A ar tarpor abar global context excute hbe . Lifo (last in first out)
//paused global function context
console.log('I am Global')