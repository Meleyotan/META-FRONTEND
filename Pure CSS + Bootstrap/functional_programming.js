
//Iterative Approach
function fibonacci(n) {
    let fibonacci_series = [0, 1];
    for (let i = 2; i < n; i++){
        fibonacci_series.push(fibonacci_series[i-1]+fibonacci_series[i-2])
    }
    return fibonacci_series
}


console.log(fibonacci(10));

//Recursive Approach
function rec_fib(n) {
    if (n == 0) { return 0 };
    if (n == 1) {
        return 1
    };
    return (rec_fib(n - 1) + rec_fib(n - 2))
}

function generaterecfib(n) {
    let rec_fib_series =[]
    for (let i = 0; i < n; i++){
        rec_fib_series.push(rec_fib(i))
    }
    return rec_fib_series
}

console.log(generaterecfib(5))

//print a triangle
for (let i = 0; i < 10; i++){
    console.log( "*".repeat(i))
}

var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
        return this.sleepy
    }
}

console.log(virtualPet.sleepy)
console.log(virtualPet.nap())
console.log(virtualPet.sleepy)

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // Declare a variable for the message
    // WRITE YOUR CODE HERE
    var message;
    message = `%c${txt}`

    // Declare a variable for the style
    // WRITE YOUR CODE HERE
    var style = `color: ${color}`
    
    // Append background style to the style variable
    // WRITE YOUR CODE HERE
    style += `background: ${background};`;
    
    // Append font size style to the style variable
    // WRITE YOUR CODE HERE
    style += `font-size ${fontSize};`;
    
    // Log the message with the applied style
    // WRITE YOUR CODE HERE
    console.log(message,style)
}
consoleStyler("blue", "yellow", "15px", "Meleyotan")

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    // Declare a fontStyle variable with default styles
    // WRITE YOUR CODE HERE
    var fontStyle = "color: tomato; font-size: 50px";
    // Check if the reason is "birthday"
    // WRITE YOUR CODE HERE
    if (reason === "birthday") {
        console.log("%cHappy birthday", fontStyle)
    }
    // If reason is "champions", log a congrats message
    // WRITE YOUR CODE HERE
    else if (reason === "champions") {
        console.log("%cCongrats on the title!", fontStyle)
    }
    else {
        consoleStyler("blue", "yellow", "15px", "Meleyotan")
    }
    // For any other reason, log a default message
    // WRITE YOUR CODE HERE
}
celebrateStyler("birthday")

// Task 3: Run both the consoleStyler and the celebrateStyler functions
// Call the consoleStyler function with appropriate arguments
// WRITE YOUR CODE HERE

// Call the celebrateStyler function with an appropriate argument
// WRITE YOUR CODE HERE

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    // Call consoleStyler with the first four arguments
    // WRITE YOUR CODE HERE

    // Call celebrateStyler with the last argument
    // WRITE YOUR CODE HERE

}

styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
// Call styleAndCelebrate with appropriate arguments
// WRITE YOUR CODE HERE

