// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.

// takes in an array of elements that are all strings
// returns an array of arrays that are pairs, the way the full string can be split into two
// ["I", "wish", "I", "hadn't", "come"] =>  [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])

function partlist(arr) {
    let newArr = []
    for (let i = 0; i < arr.length - 1; i++) {
        let first = arr.slice(0, i + 1).join(" ")
        let second = arr.slice(i + 1).join(" ")
        newArr.push([first, second])
    }
    return newArr
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"]))
