// Complete the solution so that it takes the object (JavaScript/CoffeeScript) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

// get an object with a key and value pair
// returns a string of all the key, value pairs
// {a: 1, b: 2, c: 3}  =>  "a = 1,b = 2,c = 3"

function solution(pairs) {
    let arr = Object.keys(pairs)
    let string = arr.reduce((acc, c) => acc + `${c} = ${pairs[c]},`, "")
    return string.slice(0, string.length - 1)
}

console.log(solution({ a: 1, b: 2, c: 3 }))
