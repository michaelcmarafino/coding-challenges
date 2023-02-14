// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

// Examples:
// a = "I like turtles"
// b = "I like turkeys"
// Result: 3

// a = "Hello World"
// b = "Hello World"
// Result: 0

// a = "espresso"
// b = "Expresso"
// Result: 2

function hamming(a, b) {
    let bigger = a.length > b.length ? a.length : b.length
    let total = 0
    for (let i = 0; i < bigger; i++) {
        if (a[i] !== b[i]) {
            total++
        }
    }
    return total
}
