// var i = 1;

// while(i < 10){
//     console.log('Ruhul Amin consoled : ' + i);
//     i++;
// }

var isRunning = true;

while(isRunning){
   var rand = Math.floor(Math.random() * 10 + 1);
  if(rand === 9){
    console.log('Winner Winner Chicken Dinner!');
    isRunning = false;
  }
    else {
        console.log('You lost! The number was ' + rand);
    }
}