// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// takes in an array of numbers, all of them are the same except for one, the unique number

// returns the number that is unique

// example [1, 1, 2, 1, 1, 1, 1] returns 2

// pseudo

function findUniq(arr) {
    // loop thru array sum all the instances of each number
    let obj = {}
    // maybe have two sums and then as soon as one sum goes over a total of one return the other number
    arr.forEach(el => {
        if (obj[el] === undefined) {
            obj[el] = 1
        } else {
            obj[el]++
        }
    })
    for (let key in obj) {
        if (obj[key] === 1) {
            return +key
        }
    }
}

function findUniq(arr) {
    arr.sort((a, b) => a - b)
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}

console.log(findUniq([1, 2, 2]))
