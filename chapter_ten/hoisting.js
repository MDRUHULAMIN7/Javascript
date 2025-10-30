// Hoisting mane hosse kon variable kothai declare hbe , kokhon tar value assign hbe ,creational phase tar value ki thakbe and excutional phase kivabe tar value pabe ,kon kivabe kothai  sei value ta pabe.

var a = 100 

// newPrint(a)

print(10)

var newPrint = print
newPrint(45)

function print(a){
    console.log(a)
}

print(a)

//Creation phase 

// a = undefined
// newPrint = undefined
// print = ref

//Excutional phase 
// a =100 
// print = 10
// newPrint = ref
//newPrint =  45
// print = ref