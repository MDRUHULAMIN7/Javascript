//* Comparing Two Objects *\\

var obj1 = {
    a: 100,
    b: 200
}   

var obj2 = {
    a: 100,
    b: 200
}
console.log(obj1 === obj2) // false

if(obj1.a===obj2.a && obj1.b===obj2.b){ //same
    console.log('Same')
}
else{
    console.log('Not same')
}


console.log(JSON.stringify(obj1)===JSON.stringify(obj2)) // true