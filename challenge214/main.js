// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

// get a number that is an integer
// return the sum of all the numbers below it that are multiples of 3 or 5 but also that number
// 10 => 3, 5, 6, 9, 10 = 33

function findSum(n) {
    let sum = 0
    for (let i = 3; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        } else if (i === n) {
            sum += 1
        }
    }
    return sum
}
