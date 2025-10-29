//akta ba prothom function  ar  input akare second function ar output dewa jai tahole take composition function bole

 function print(inp){
    console.log(inp)
 }

 function multipyByFive(n){
    return n * 5
 }

 function add(a,b){
    return a + b
 }

 print(multipyByFive(add(4,4)))
// akhane amra print function input hisave multipyByFive function theke jeta output asbe seta dissi abar multipyByFive  function ar input a add function theke output asbe seta dissi . Prothome add(4,4) function call kore 8 return kore, ei output ta immediately multipyByFive() function er input hishebe pass hoye jay. Then multipyByFive(8) function 40 return kore, and sheshe ei value ta print() function er input hishebe use hoye final output 40 console e show kore. Eirokom ekta function er output ke arekta function er input banano kei composition function bole