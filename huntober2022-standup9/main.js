// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

function findDeletedNumber(arr, mixArr) {
    // base case first
    if (arr.length === mixArr.length) {
        return 0
    }
    let arrSum = arr.reduce((acc, c) => acc + c, 0)
    let mixArrSum = mixArr.reduce((acc, c) => acc + c, 0)
    return arrSum - mixArrSum
}

console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]), 2)
