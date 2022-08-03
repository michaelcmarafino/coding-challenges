// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// take in two integers, a and b, can be positive or negative

// returns a single value which is the sum of the integers between and including them

// (0, 10) => 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

function getSum(a, b) {
    // loop from the smallest number to the largest number
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    let sum = 0
    for (let i = min; i <= max; i++) {
        // add all the numbers together and return the value
        sum += i
    }
    return sum
}
