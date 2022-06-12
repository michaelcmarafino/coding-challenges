// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

// parameters => a single positive integer, no floting point numbers, no negative numbers, and no 0, type is number

// returns => type of number, another single positive integer, the total number of divisors of the parameter

// examples => 12 would return 6 (1, 2, 3, 4, 6, 12)

// pseudocode =>

function getDivisorsCnt(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            total++
        }
    }
    return total
}
