//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

let party = [
    "Raichu",
    "bulbasaur",
    "Charzard",
    "Psyduck",
    "Hitmonchan",
    "Mewtwo",
]

function reverseParty(arr) {
    return arr.reverse()
}

console.log(reverseParty(party))

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function areTheyEqual(a, b) {
    return (
        a.reduce((acc, c) => acc + c ** 2, 0) >
        b.reduce((acc, c) => acc + c ** 3, 0)
    )
}

console.log(areTheyEqual([2, 2, 2], [2, 2, 2]))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
let one = [22, -6, 32, 82, 9, 25]
let two = [68, -1, 1, -7, 10, 10]
// =>  [-6, 32, 25]
// => [-1, 10]

function multiple(arr) {
    let newArr = arr.filter((el, i) => el % i === 0)
    return newArr
}

console.log(multiple(one))
console.log(multiple(two))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

let mixedArray = [1, 2, "3", 4, "5", "12", 100, "76"]

function sumOfArray(arr) {
    return arr.reduce((acc, c) => acc + +c, 0)
}

console.log(sumOfArray(mixedArray))
