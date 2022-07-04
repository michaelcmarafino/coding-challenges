// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// "reese's" => ())))()

// function duplicateEncode(word) {
//     let arr = word.toLowerCase().split("")
//     let newWordArr = []
//     let oldWordArr = []
//     for (let i = 0; i < word.length; i++) {
//         let char = arr.shift()
//         if (arr.includes(char) || oldWordArr.includes(char)) {
//             newWordArr.push(")")
//             oldWordArr.push(char)
//         } else {
//             newWordArr.push("(")
//             oldWordArr.push(char)
//         }
//     }
//     return newWordArr.join("")
// }

function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split("")
        .map(function (a, _, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")"
        })
        .join("")
}

console.log(duplicateEncode("reese's"))
