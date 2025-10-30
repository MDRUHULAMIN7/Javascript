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

/*Puro JavaScript code ta run howar age prothome Global Execution Context create hoy — eta hoy creation phase e. Ei phase e JS engine sob variable ar function gula ke memory te rakhe. Tarpor start hoy execution phase. Code run suru hole var x = 100 assign hoy, erpor jokhon a() call hoy, tokhon Global context pause hoye jai, karon ekta notun function context create hoy.

a() function call hoilei ekta notun context create hoy ar tar vitore code execute hote thake. Kintu a() er vitore abar b() function call kora ase, tai ekhon a() pause hoye jai ar b() context create hoy.

b() start hoile abar same jinis — b() er vitore d() call ase, tai b() pause hoy ar d() context create hoy. d() er vitore abar c() call ase, tai d() pause hoy ar c() context create hoy.

Ekhon c() function run hoy, ekhane console log hoy — “i am Function C”. c() finish hoile eta return kore d() te. Tarpor d() resume hoy ar tar console log — “i am Function D” execute hoy. d() finish hoile return kore b() te.

Tarpor b() resume hoy ar tar console log — “i am Function B” execute hoy, finish hoile return kore a() te. Erpor a() resume hoy ar log kore “i am Function A”, finish hoye jay.

Shesh e Global context resume hoy ar console e print hoy “I am Global”.

Ei pura process ta LIFO (Last In First Out) system e kaj kore — mane je function ta shobcheye last e call hoy (c()), seta age finish hoy*/
console.log('I am Global')