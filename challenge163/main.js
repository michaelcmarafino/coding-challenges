// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// function sortArray(array) {
//     let oddArr = []
//     let oddArrIncrement = 0
//     let answer = array.map(el => {
//         if (el % 2 === 0) {
//             return el
//         } else {
//             oddArr.push(el)
//             return ""
//         }
//     })
//     oddArr.sort((a, b) => a - b)
//     for (let i = 0; i < answer.length; i++) {
//         if (answer[i] === "") {
//             answer[i] = oddArr[oddArrIncrement]
//             oddArrIncrement++
//         }
//     }
//     return answer
// }

function sortArray(array) {
    const odd = array.filter(x => x % 2).sort((a, b) => a - b)
    return array.map(x => (x % 2 ? odd.shift() : x))
}

sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
