// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// parameters => a string, a single word, no numbers or any other data type, can be uppercase or lowercase

// returns => a boolean, true or false, if there are no repeating letters, all uppercase and lowercase letters count as unique letters, an empty string counts as true, it has all unique characters

// examples =>

// pseudocode =>

function isIsogram(str) {
    return str.toLowerCase() === Array.from(new Set(str.split(""))).join("")
}

console.log(isIsogram("moOse"))

function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length
}
