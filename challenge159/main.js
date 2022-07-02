// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// take in a string with any number of characters

// return an array with the string split into elements of 2 characters each, if the last string is odd then it should have an _ to make it even

function solution(str) {
    if (str.length % 2 !== 0) {
        str += "_"
    }
    let arr = []
    for (let i = 0; i < str.length; i += 2) {
        arr.push(str[i] + str[i + 1])
    }
    return arr
}

solution("catt")
