// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

// give 3 numbers, non-negative (begin, end, step)
// return the sum of the sequence

const sequenceSum = (begin, end, step) => {
    if (end < begin) return 0
    let sum = 0
    for (let i = begin; i <= end; i += step) {
        sum += i
    }
    return sum
}

console.log(sequenceSum(8, 6, 2))
