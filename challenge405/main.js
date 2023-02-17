// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
    const obj = {}
    for (let letter of text) {
        obj[letter] = (obj[letter] || 0) + 1
    }
    return [...new Set(text)].map(el => [el, obj[el]])
}

console.log(orderedCount("abradcadabra"))
