// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
    let obj = {}
    arr.map(el => {
        obj[el] = obj[el] + 1 || 1
    })
    return Number(Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b)))
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]))
