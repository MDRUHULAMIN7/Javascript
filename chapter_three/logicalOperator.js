// && // ! ||

let a = 5;
let b = 10;
let c = 15;

if(a < b && b > c){
    console.log('Both conditions are true');
} else {
    console.log('One or both conditions are false');
}

if(a < b || b < c){
    console.log('At least one condition is true');
} else {
    console.log('Neither condition is true');
}

if(!(a > b)){
    console.log('The condition is false, so this is true');
}

if(!!(a < b)){
    console.log('The condition is true, so this is false');
}
