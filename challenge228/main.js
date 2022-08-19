// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
    return Array.from(new Set(a))
}

console.log(distinct([1, 1, 2, 3, 3, 4, 5, 8, 8]))
