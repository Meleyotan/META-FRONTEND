
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

