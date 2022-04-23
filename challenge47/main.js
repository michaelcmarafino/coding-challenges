// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin) {
    return parseInt(bin, 2)
}

function binToDec(bin) {
    return bin
        .split("")
        .reverse()
        .map(Number)
        .reduce((acc, c, i) => (c === 1 ? acc + 2 ** i : acc + 0))
}
