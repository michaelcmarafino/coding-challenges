// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// parameters => a single number, can be positive, negative or 0.  If it is 0 or negative return 0

// returns => the sum of all the numbers below the parameter number if they are divisible by 3 or 5

// examples =>

// pseudocode =>

function solution(number) {
    // if(number <= 0) return 0

    // create array to hold values that pass test
    let numsArr = []
    // for loop with ending condition as the parameter number
    for (let i = 1; i < number; i++) {
        // fizzBuzz
        if (i % 3 === 0 && i % 5 === 0) {
            // if passes fizzBuzz then add to array
            numsArr.push(i)
        } else if (i % 3 === 0) {
            numsArr.push(i)
        } else if (i % 5 === 0) {
            numsArr.push(i)
        }
    }
    return numsArr.reduce((acc, c) => acc + c, 0)
    // reduce array to get answer
}
