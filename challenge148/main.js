// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

// take in an array as first parameter, then the index that we are going to be looking at - array will always have at least one element, the given index will always be in the array

// return the index of the number that is larger but least largest out of the numbers in the array

// [5, 6, 8, 10, 20, 1], 3 => 4

function leastLarger(a, i) {
    // grab the number out of the array at the index i and set it to a variable
    let num = a[i]
    // make a copy of the array and then sort it, find the value that is greater than the variable
    let sorted = [...a]
    let newNum = sorted.sort((a, b) => a - b).find(el => el > num)
    // use the findIndex to find that value on the original array and return
    return a.findIndex(el => el === newNum)
}

const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter(n => n > a[i])))

console.log(leastLarger([5, 6, 8, 10, 20, 1], 3))
