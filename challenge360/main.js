// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
    let nums = "1234567890"
    let firstLetters = str.split(" ").map(word => {
        return word
            .split("")
            .filter(let => nums.includes(let))
            .join("")
    })
    let otherLetters = str.split(" ").map(word => {
        return word
            .split("")
            .filter(let => !nums.includes(let))
            .join("")
            .split(" ")
            .map(word => {
                if (word.length < 2) {
                    return word
                } else {
                    let lastLetter = word[word.length - 1]
                    let firstLetter = word[0]
                    word = lastLetter + word.slice(1, -1) + firstLetter
                    return word
                }
            })
    })
    return otherLetters
        .map((el, i) => (el = String.fromCharCode(firstLetters[i]) + el))
        .join(" ")
}

console.log(decipherThis("72olle 103doo 100ya"), "Hello good day")
