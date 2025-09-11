// For Loops 

// for (let i = 0; i < 205; i++) {
//     console.log('Ruhul Amin consoled : ' + (i+1));
// }

/* for (initializer; condition; increment/decrement){
    // code to be executed
} */


    // for (let i = 1; i <= 100; i++) {
    //     if(i % 2 === 0){
    //         // console.log(i + ' is Even');
    //     } else {
    //         console.log(i + ' is Odd');
    //     }
    // }

    // for (var i = 0; i <= 100; i++){

    //      i % 2 !== 0 ? console.log(i + ' is Odd') :'' ;
    // }

    var sum = 0;
    // for (let i = 1; i <= 10; i++){
    //     sum += i;  // sum = sum + i;
    // }

    for(let i = 1; i <= 10; i++){
        console.log(sum + "+" + i + "=" + (sum += i) );
    }
    console.log(sum);