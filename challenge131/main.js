// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// takes in 2 strings with letters from a to z, does casing matter? looks like everything is lowercase in this challenge. No other data type is given.

// returns a new, sorted string, the longest possible, containing unique letters coming from either word

// "aaabbbbbcccc" "dddeeee" => "abcde"

// pseudo

function longest(s1, s2) {
    return Array.from(new Set(s1 + s2))
        .sort()
        .join("")
}

console.log(longest("aaabbccc", "ddddeeee"))
