// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// takes in an array of integers, at least 3 of them, can be negative, 0 and positive

// returns one of those numbers (type of number), the one that is unlike the others in that it is either even or odd while all the other numbers in the array are the opposite

// [1, 3, 7, 10] => 10

function findOutlier(integers) {
    let evenArr = []
    let oddArr = []
    // loop thru array with for loop
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evenArr.push(integers[i])
        } else {
            oddArr.push(integers[i])
        }
    }
    return evenArr.length === 1 ? evenArr[0] : oddArr[0]
    // if element is even put in one array

    // else if element is odd put in another array

    // after loop check which array has a length of 1.  Then return array[0]
}
