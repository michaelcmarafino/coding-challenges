// Today I'd like you to write a function that:

// takes in a given array of strings and move any entries containing the letter 'a' to the front
// then move any remaining entries that have over 3 characters to the back
// please preserve the relative order of entries within their given category
// Example:

myArr = ["hi", "hello", "howdy", "hola", "hej", "hallo", "heyyy"]
// // move things around
// => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

function moveThingsAround(arr) {
    let longArr = []
    let aArr = []
    let middle = []
    arr.map(el => {
        if (el.includes("a" || el.includes("A"))) {
            aArr.push(el)
        } else if (el.length > 3) {
            longArr.push(el)
        } else {
            middle.push(el)
        }
    })
    return [...aArr, ...middle, ...longArr]
}

// function moveThingsAround(arr) {
//     return arr
//         .filter(el => el.includes("a" || el.includes("A")))
//         .concat(
//             arr.filter(
//                 el => !el.includes("a") && !el.includes("A") && el.length < 4
//             )
//         )
//         .concat(
//             arr.filter(
//                 el => el.length > 3 && !el.includes("a") && !el.includes("A")
//             )
//         )
// }

console.log(moveThingsAround(myArr), [
    "hola",
    "hallo",
    "hi",
    "hej",
    "hello",
    "howdy",
    "heyyy",
])
