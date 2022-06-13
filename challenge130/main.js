// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// an array of integers, can be 0, pos, or neg integers, can have a single integer in there.

// return the integer that appears an odd number of times.  There will only be one integer that appears an odd number of times.  All others will appear an even number

// [1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1] => 10

function findOdd(A) {
    let obj = {}
    A.forEach(el => {
        if (obj[el] == undefined) {
            obj[el] = 1
        } else {
            obj[el]++
        }
    })
    for (let key in obj) {
        if (obj[key] % 2 !== 0) {
            return +key
        }
    }
}

console.log(findOdd([0, 0, 1, 2, 2, 3, 3, 3, 3, 1, 100]))
