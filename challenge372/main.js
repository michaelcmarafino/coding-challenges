// Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

// For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

// If the second string isn't a valid rotation of the first string, the method returns -1.
// Examples:
// "coffee", "eecoff" => 2
// "eecoff", "coffee" => 4
// "moose", "Moose" => -1
// "isn't", "'tisn" => 2
// "Esham", "Esham" => 0
// "dog", "god" => -1

function shiftedDiff(first, second) {
    let firstLetter, word
    let count = 0
    if (first === second) return count
    let secondArr = second.split("")
    for (let i = 0; i < second.length; i++) {
        count++
        firstLetter = secondArr.shift()
        secondArr.push(firstLetter)
        word = secondArr.join("")
        if (first === word) {
            break
        }
    }
    if (first !== word) {
        return -1
    }
    return count
}

function shiftedDiff(first, second) {
    if (first.length != second.length) return -1
    return (second + second).indexOf(first)
}

console.log(shiftedDiff("coffee", "eecoff"), 2)
console.log(shiftedDiff("eecoff", "coffee"), 4)
console.log(shiftedDiff("moose", "Moose"), -1)
console.log(shiftedDiff("isn't", "'tisn"), 2)
console.log(shiftedDiff("Esham", "Esham"), 0)
console.log(shiftedDiff("dog", "god"), -1)
