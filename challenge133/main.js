// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// a single integer, has more than one digit

// returns a single digit because if it was more than one digit you could keep running the function

// 16 => 1 + 6 = 7

// pseudocode

function digital_root(n) {
    // check if the length of the number is 1, if it is just return the number
    if (n < 10) return n
    // split apart number into an array and then reduce it down to sum
    let newNum = n
        .toString()
        .split("")
        .reduce((acc, c) => acc + +c, 0)

    return digital_root(newNum)
}

// console.log(digital_root(493193))
