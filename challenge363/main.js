// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12] --> 12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10] --> 12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10] --> 3

function mostFreq(arr) {
    const obj = {}
    let maxNum
    let count = 0
    for (const num of arr) {
        obj[num] = (obj[num] || 0) + 1
    }

    for (const num in obj) {
        if (obj[num] > count || (obj[num] === count && num > maxNum)) {
            maxNum = num
            count = obj[num]
        }
    }
    return maxNum
}

console.log(mostFreq([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12)
console.log(mostFreq([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]), 12)
console.log(mostFreq([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3)
