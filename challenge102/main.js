// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array.

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// parameters => 2 whole, positive numbers
// the first one is the step, what number to increment by => x
// the second one is how many time to do this incrementation => n

// return => an array of these numbers, starting with the first param x

// example => (2, 10) = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

function countBy(x, n) {
    // initiate the array that will hold the numbers
    let z = []
    // create a loop that runs n number of times starting with first param, x
    for (let i = 1; i <= n; i++) {
        z.push(i * x)
    }
    // return the array of the numbers
    return z
}

console.log(countBy(2, 10))
