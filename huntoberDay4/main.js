// "   The white space at the beginning of this string doesn't match the whitespace at the end. "
// // reverse it
// " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "

function reverseString(str) {
    return str.split("").reverse().join("")
}

console.log(
    reverseString(
        "   The white space at the beginning of this string doesn't match the whitespace at the end. "
    )
)
