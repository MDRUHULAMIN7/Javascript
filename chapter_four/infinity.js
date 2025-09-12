
for (;;){
    console.log('Hello World!');
       var rand = Math.floor(Math.random() * 10 + 1);
  if(rand === 9){
    console.log('Winner Winner Chicken Dinner!');
    break
  }
    else {
        console.log('You lost! The number was ' + rand);
    }
}