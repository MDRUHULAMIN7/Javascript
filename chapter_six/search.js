// Search 


var arr = [1, 2, 3, 4, 9,66,22,7,11,92];

var find =11;
var isFound = false
for(var i=0; i < arr.length; i++){
 
    if(arr[i] === find){
          console.log('Data found in index', i)
        isFound = true;
        break;
    }
}
if(!isFound){
    console.log('not found')
}