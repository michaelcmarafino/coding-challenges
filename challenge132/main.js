// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// a string of letters or an array of numbers, casing matters on the letters - it counts as a unique char

// returns an array of unique characters

// 'ABBBCCCCDD' => ['A', 'B', 'C', 'D']

let uniqueInOrder = function (iterable) {
    // if the argument is a string then turn it into an array
    if (typeof iterable === "string") {
        iterable = iterable.split("")
    }
    // now the argument is an array so use reduce with acc of array
    return iterable.filter((el, i) => el !== iterable[i + 1])
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"))
