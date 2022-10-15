// Today you'll need to create a function that swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.

// Examples:

// COPY
// 'A'  // first letter of the alphabet, uppercase
// 'z'  // last letter of the alphabet, lowercase

// 'p'  // 16th letter of the alphabet, lowercase
// 'K'  // 16th letter from *end* of alphabet, uppercase

// 'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
// // function replaces letters with opposites
// 'Example: 0 number or punctuation changes'

function swapAlphabet(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let alphabetReverseAndCapitalized = alphabet
        .split("")
        .reverse()
        .map(el => el.toUpperCase())
        .join("")
    return str
        .split("")
        .map(el => {
            if (alphabet.includes(el)) {
                let index = alphabet.indexOf(el)
                return alphabetReverseAndCapitalized[index]
            } else if (alphabetReverseAndCapitalized.includes(el)) {
                let index = alphabetReverseAndCapitalized.indexOf(el)
                return alphabet[index]
            } else {
                return el
            }
        })
        .join("")
}

console.log(swapAlphabet("vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH"))

// Week's final answer:
const encryptedMsg =
    "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

// Day 1
function fix(string) {
    let obj = {
        0: "O",
        1: "I",
        2: "Z",
        3: "E",
        4: "h",
        5: "S",
        6: "G",
        7: "L",
        8: "B",
        9: "q",
        O: "0",
        I: "1",
        Z: "2",
        E: "3",
        h: "4",
        S: "5",
        G: "6",
        L: "7",
        B: "8",
        q: "9",
    }
    return string
        .split("")
        .map(el => {
            if (el in obj) {
                return obj[el]
            }
            return el
        })
        .join("")
}

const day1Result = fix(encryptedMsg)
console.log("Day 1 result: ", day1Result)

// Day 3
function replaceWithSpace(str, arr) {
    let key = arr.join("")
    return str
        .split("")
        .map(el => (key.includes(el) ? " " : el))
        .join("")
}

const day3Result = replaceWithSpace(day1Result, ["S", "p", "a", "c", "e"])
console.log("Day 3 result: ", day3Result)

// Day 4
function reverseString(str) {
    return str.split("").reverse().join("")
}

const day4Result = reverseString(day3Result)
console.log("Day 4 result: ", day4Result)

// Day 6
function removeXCharacter(str, num) {
    return str
        .split("")
        .filter((_, i) => (i + 1) % num !== 0)
        .join("")
}

const day6Result = removeXCharacter(day4Result, 10)
console.log("Day 6 result: ", day6Result)

const finalAnswer = swapAlphabet(day6Result)
console.log("Final result: ", finalAnswer)
