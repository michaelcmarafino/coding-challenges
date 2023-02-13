// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

function findUniq(arr) {
    const obj = {}
    for (let str of arr) {
        str.toLowerCase()
            .split("")
            .forEach(letter => (obj[letter] = (obj[letter] || 0) + 1))
    }

    let least = 1000
    let current
    for (let letter in obj) {
        current = obj[letter]
        if (current <= least) {
            least = current
            answer = letter
        }
    }

    return arr.filter(el => el.toLowerCase().includes(answer)).join("")
}

console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]))
console.log(
    findUniq(["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"])
)
