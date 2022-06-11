// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// parameters => both are strings, does casing matter?  Should make sure everything is lowercase

// returns => boolean, either true or false

// examples => 'dog', 'g' // returns true

// pseudocode =>

function solution(str, ending) {
    return str.endsWith(ending)
}

// console.log(solution("dog", "o"))
