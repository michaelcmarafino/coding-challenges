// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0
}

const sumOfDifferences = (arr) =>
    arr
        .sort((a, b) => b - a)
        .map((a, i) => a - arr[i + 1] || 0)
        .reduce((a, b) => a + b, 0)
