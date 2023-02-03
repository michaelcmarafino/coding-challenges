// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
    let stack = []
    for (const p of parens) {
        if (p === "(") {
            stack.unshift(p)
        } else if (p === ")" && stack.length > 0) {
            stack.shift()
        } else if (p === ")" && stack.length === 0) {
            return false
        }
    }

    return stack.length === 0
}

console.log(validParentheses("(())((()())())"), true)
