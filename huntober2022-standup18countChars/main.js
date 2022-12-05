// Count all the occurring characters in a string.  If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty?  Then the result should be empty object literal, {}.

function countChars(str) {
    const obj = {}
    for (let char of str) {
        obj[char] = (obj[char] || 0) + 1
    }
    return obj
}

console.log(countChars("aba"), "{'a': 2, 'b': 1}")
console.log(countChars("banana"), "{'b': 1, 'a': 3, 'n': 2}")
console.log(countChars("mississippi"))
console.log(countChars(""), {})
