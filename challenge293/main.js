// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// function moveZeros(arr) {
//     let zeroArr = []
//     let others = []
//     arr.forEach(el => {
//         if (el === 0) {
//             zeroArr.push(el)
//         } else {
//             others.push(el)
//         }
//     })
//     return [...others, ...zeroArr]
// }

function moveZeros(arr) {
    return arr.filter(el => el !== 0).concat(arr.filter(el => el === 0))
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]), [
    false,
    1,
    1,
    2,
    1,
    3,
    "a",
    0,
    0,
])
