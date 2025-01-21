// A simple function that takes another function as an argument
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

// A callback function
function sayGoodbye() {
    console.log('Goodbye!');
}

  // Using the greet function with the callback
greet('Alice', sayGoodbye);
