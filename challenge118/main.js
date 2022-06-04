// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// parameters => a and b are both integers
// returns => the sum of the numbers converted to binary
// examples =>
// console.log(addBinary(1, 2))

function addBinary(a, b) {
    let sum = a + b
    let half = Math.floor(sum / 2)
    let binaryNum = sum % 2
    let binaryTotal = []
    binaryTotal.unshift(binaryNum)
    while (half) {
        sum /= 2
        half = Math.floor(sum)
        binaryNum = half % 2
        binaryTotal.unshift(binaryNum)
    }
    binaryTotal.shift()
    return binaryTotal.reduce((acc, c) => acc + c, "")
}

function addBinary(a, b) {
    return (a + b).toString(2)
}
