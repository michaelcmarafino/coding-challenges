// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Javascript examples
// printArray([1,2,3]) // --> '1,2,3' : elements are Numbers
// printArray([[1,2],["a","b"]]) // --> '[[1,2],["a","b"]]' : elements are Arrays

const printArray = (array) => {
    return array.some((v) => Array.isArray(v) || typeof v === "object")
        ? JSON.stringify(array)
        : array.toString()
}
