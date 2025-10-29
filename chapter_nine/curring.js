function add(a,b,c){
    return  a + b +c
}

add (33,44,11)


function currying(a){  // currying namer akta function define korlam jeta akta argument a nei and arekta anonymus call back functon return kore 
    return function(b){ // ata akta anonymus function jeta currying function ar reference dhore rakhe and b argument nei and arekta anonymus function return kore 
         return function(c){ // ata arekta anonymus function jeta parent function ar argument b dhore rakhe and akta rgument c nei and lastly sobgula return kore dei a + b +c 
            return a+b+c
         }
    }
}

var result = currying(5)(10)(20)

/*Jokhon amra prothom bar `currying(5)` call kori, tokhan eita `a` er value hishebe 5 ke store kore ney ar por ekta notun function return kore. Ei returned function take abar immediately `(10)` diye call kora hoy, jetay `b` er value hishebe 10 ke store kore ney ar abar arekta function return kore. Sheshe, ei shesh function take `(20)` diye call koray, eita `c` er value hishebe 20 ke store kore. Ekhane JavaScript er closure feature er karone, agey store kora shob value - 5, 10, ar 20 - egulo access korte pare. Tarpor innermost function eita calculate kore `5 + 10 + 20` jogfol 35 ke return kore. Ei puro process ta currying er maddhome dekha jay jekhane ekta function ke choto choto multiple function e bhenge felay, jate kore proti ta function ekta argument handle korte pare ar closure er maddhome shob previous argument gulo access korte pare.*/
console.log(result)