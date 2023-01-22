// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

// function scrollingText(text) {
//     const answer = []
//     let word
//     for (let i = 0; i < text.length; i++) {
//         word = text.toUpperCase().slice(i) + text.toUpperCase().slice(0, i)
//         answer.push(word)
//     }
//     return answer
// }

function scrollingText(text) {
    let word = (text + text).toUpperCase()
    let answer = []
    for (let i = 0; i < text.length; i++) {
        answer.push(word.slice(i, text.length + i))
    }
    return answer
}

console.log(scrollingText("coffee"))
