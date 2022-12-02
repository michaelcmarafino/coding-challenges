function reverseString(str) {
    let reverseStr = ""
    for (let char of str) {
        reverseStr = char + reverseStr
    }
    return reverseStr
}

console.log(reverseString("bob"), "bob")
console.log(reverseString("john"), "nhoj")
console.log(reverseString("sarah"), "haras")
