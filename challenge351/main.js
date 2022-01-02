// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

function moveTen(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    return s
        .split("")
        .map(el => alphabet[(alphabet.indexOf(el) + 10) % alphabet.length])
        .join("")
}

console.log(moveTen("testcase"), "docdmkco")
