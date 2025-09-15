// 

var arr = [1, 2, 3, 4, 9];

//arr.push(2, 5);// 2, 5 k array er last e add kore dibe
//arr.unshift(0) // 0 k array er first e add kore dibe
//arr.shift() // array er first element delete kore dibe
//arr.pop() // array er last element delete kore dibe

//arr.splice(2, 0,6) // aikhane 2 no index kono data delete na kore 6 insert korbe
arr.splice(4, 1) // aikhane 4 no index theke 1 ta data delete hobe
arr.splice(2, 1, 10) // aikhane 4 no index ar data update kore 10 add korbe


console.log(arr)
