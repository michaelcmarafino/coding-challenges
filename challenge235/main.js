// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// take in an array of numbers
// return an array with the number replaced by a vowel if the charCode equals that of the vowel

function isVow(a) {
    let obj = { 97: "a", 101: "e", 105: "i", 111: "o", 117: "u" }
    return a.map(el => (obj[el] !== undefined ? obj[el] : el))
}

console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]))
