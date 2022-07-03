// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

// takes in an array of increasing letters, always will get a valid array, the case for all the letters will be the same

// returns the single letter that is missing in the correct case

// ['a', 'b', 'c', 'e'] => 'd'

function findMissingLetter(array) {
    let alphabetStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let firstLetterIndex = alphabetStr.indexOf(array[0])
    let letterRange = []
    for (let i = firstLetterIndex; i < firstLetterIndex + array.length; i++) {
        letterRange.push(alphabetStr[i])
    }
    return letterRange.filter(el => !array.includes(el)).join("")
}

console.log(findMissingLetter(["A", "B", "C", "D", "F"]))
