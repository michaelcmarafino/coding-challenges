// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// takes in two arrays, a and b.

// returns a new array of all the elements remaining in a after taking out all elements from a that are in array b

// [1,2,2,2,2,3,4] [2] => [1,3,4]

function arrayDiff(a, b) {
    for (let i = 0; i < b.length; i++) {
        a = a.filter(el => el !== b[i])
    }
    return a
}

function array_diff(a, b) {
    return a.filter(e => !b.includes(e))
}
