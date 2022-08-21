// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.

// function inArray(array1, array2) {
//     const arr = []
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             if (array2[j].indexOf(array1[i]) !== -1) {
//                 arr.push(array1[i])
//             }
//         }
//     }
//     return Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b))
// }

// console.log("harp".indexOf("arp"))

function inArray(arr1, arr2) {
    return arr1
        .filter(a1 => {
            return arr2.some(a2 => {
                return a2.indexOf(a1) > -1
            })
        })
        .sort()
}

console.log(
    inArray(
        ["tarp", "mice", "bull"],
        ["lively", "alive", "harp", "sharp", "armstrong"]
    )
)
