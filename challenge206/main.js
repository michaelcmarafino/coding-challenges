// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// a single word string

// an array with the indices of every capital letter in the word input

const capitals = function (word) {
    let ans = []
    word.split("").forEach((el, i) => {
        if (el === el.toUpperCase()) {
            ans.push(i)
        }
    })
    return ans
}

console.log(capitals("CodEWaRs"))
