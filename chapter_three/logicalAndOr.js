var name = ''

var fullname = name  || 'Guest User';

var fullname2 = name && 'Hello ' + name;

// if(name.length === 0){
//     fullname = 'Guest User'
// } else {
//     fullname = name;
// }
console.log(fullname);
console.log(fullname2);