// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// get an array of strings, all the strings will be different lengths
// return a sorted array of the same strings in a new order from shortest length to longest length

// function sortByLength(array) {
//     let sortedArr = []
//     let length = array.map(el => el.length).sort((a, b) => a - b)
//     length.forEach(el =>
//         array.find(arrEl => {
//             if (arrEl.length === el) {
//                 sortedArr.push(arrEl)
//             }
//         })
//     )
//     return sortedArr
// }

function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length)
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))
