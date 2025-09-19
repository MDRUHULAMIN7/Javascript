function something(greet, name) { // outer function
    
    //  function sayHi() {  // inner function
    //   console.log(greet, name);
    // }

    // sayHi()
    
    function getFirstName() {
        if (name) {
            return name.split(' ')[0]
        }
    }

    var message = greet + ' ' + getFirstName()
    console.log(message)
}

something('hello', 'ruhul amin')
