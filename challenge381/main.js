// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.

function broken(x) {
    let answer = ""
    for (const num of x) {
        if (num === "1") {
            answer += "0"
        } else {
            answer += "1"
        }
    }
    return answer
}

function broken(x) {
    return x
        .split("")
        .map(a => (a === "1" ? "0" : "1"))
        .join("")
}

console.log(broken("10000000101101111110011001000"))
