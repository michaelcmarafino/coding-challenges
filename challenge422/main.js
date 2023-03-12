// Given a multi-dimensional array arr, flatten the array (turning it into a one-dimensional array), preserving order.

// Do this twice - once recursively, then once iteratively.

// Example:

// flatten([
//   [1, 5],
//   2,
//   [3, [7, 4]]
// ])
// should return:

// [1, 5, 2, 3, 7, 4]

// iterative
function flattenIterative(arr) {
    let result = []
    const stack = [...arr]
    while (stack.length) {
        const next = stack.pop()
        if (Array.isArray(next)) {
            stack.push(...next)
        } else {
            result.unshift(next)
        }
    }
    return result
}

// recursive
function flattenRecursive(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenRecursive(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}

console.log(flattenRecursive([[1, 5], 2, [3, [7, 4]]]))
console.log(flattenIterative([[1, 5], 2, [3, [7, 4]]]))
console.log(flattenRecursive([1, 5, 2, 3, 7, 4]))
console.log(flattenIterative([1, 5, 2, 3, 7, 4]))
