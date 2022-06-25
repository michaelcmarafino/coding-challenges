// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// takes in two strings, can have different casing but we don't care about casing so case insensitive

// return a boolean, either true or false - if they are anagrams of each other.  So the same exact amount of letters and same letters, casing doesn't matter

// example => "foefet" "toffee" would be true
String.prototype.sortLetters = function () {
    return this.toLowerCase().split("").sort().join("")
}

let isAnagram = function (test, original) {
    return test.sortLetters() == original.sortLetters()
}

console.log(isAnagram("Buckethead", "Deathcubekk"))
