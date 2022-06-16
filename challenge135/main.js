// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// params => a string with distinct case-insensitive letters and numeric digits.  B and b count as the same letter

// returns a non-negative number that is the sum of the amount characters that have over 1 instance in that string

// example is "AbBa" => 2

// pseudo

function duplicateCount(text) {
    let obj = {}
    let letterArr = text.toLowerCase().split("")
    letterArr.map(el => {
        if (obj[el] === undefined) {
            obj[el] = 1
        } else {
            obj[el]++
        }
    })
    let sum = 0
    for (let key in obj) {
        if (obj[key] > 1) {
            sum++
        }
    }
    return sum
}
