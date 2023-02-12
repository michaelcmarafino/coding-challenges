// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.

function solve(s) {
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const answer = [0, 0, 0, 0]
    for (let el of s) {
        if (letters.toUpperCase().includes(el)) {
            answer[0] += 1
        } else if (letters.includes(el)) {
            answer[1] += 1
        } else if (numbers.includes(el)) {
            answer[2] += 2
        } else {
            answer[3] += 3
        }
    }
    return answer
}
