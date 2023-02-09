// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */

//        Using an array stack
// const isValid = function(s) {
//   let stack = []
//   let obj = { ")": "(", "}": "{", "]": "[" }
//   for (const char of s) {
//     if (!obj[char]) {
//       stack.unshift(char)
//     } else if (stack.shift() !== obj[char]) {
//       return false
//     }
//   }
//   return stack.length === 0
// }

//        Using an obect (constructor) stack
const isValid = function (s) {
    class Stack {
        constructor() {
            this.storage = {}
            this.size = 0
        }

        push(element) {
            this.size++
            this.storage[this.size] = element
        }

        pop() {
            let removed = this.storage[this.size]
            delete this.storage[this.size]
            this.size--
            return removed
        }
    }

    let stack = new Stack()
    let parens = { ")": "(", "}": "{", "]": "[" }

    for (let char of s) {
        if (!parens[char]) {
            stack.push(char)
        } else if (stack.pop() !== parens[char]) {
            return false
        }
    }
    return stack.size === 0
}

console.log(isValid("()"), true)
console.log(isValid("()[]{}"), true)
console.log(isValid("(]"), false)
