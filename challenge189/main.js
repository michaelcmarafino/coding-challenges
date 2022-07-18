// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// My Solution
// function zero(fn) {
//     let num = 0
//     if (!fn) {
//         return num
//     } else {
//         return Math.floor(eval(`${num} ${fn}`))
//     }
// }
// function one(fn) {
//     let num = 1
//     if (!fn) {
//         return num
//     } else {
//         return Math.floor(eval(`${num} ${fn}`))
//     }
// }
// function two(fn) {
//     let num = 2
//     if (!fn) {
//         return num
//     } else {
//         return Math.floor(eval(`${num} ${fn}`))
//     }
// }
// function three(fn) {
//     let num = 3
//     if (!fn) {
//         return num
//     } else {
//         return Math.floor(eval(`${num} ${fn}`))
//     }
// }
// function four(fn) {
//     let num = 4
//     if (!fn) {
//         return num
//     } else {
//         return Math.floor(eval(`${num} ${fn}`))
//     }
// }
// function five(fn) {
//     let num = 5
//     if (!fn) {
//         return num
//     } else {
//         return Math.floor(eval(`${num} ${fn}`))
//     }
// }
// function six(fn) {
//     let num = 6
//     if (!fn) {
//         return num
//     } else {
//         return Math.floor(eval(`${num} ${fn}`))
//     }
// }
// function seven(fn) {
//     let num = 7
//     if (!fn) {
//         return num
//     } else {
//         return Math.floor(eval(`${num} ${fn}`))
//     }
// }
// function eight(fn) {
//     let num = 8
//     if (!fn) {
//         return num
//     } else {
//         return Math.floor(eval(`${num} ${fn}`))
//     }
// }
// function nine(fn) {
//     let num = 9
//     if (!fn) {
//         return num
//     } else {
//         return Math.floor(eval(`${num} ${fn}`))
//     }
// }

// function plus(num) {
//     return ` + ${num}`
// }
// function minus(num) {
//     return ` - ${num}`
// }
// function times(num) {
//     return ` * ${num}`
// }
// function dividedBy(num) {
//     return ` / ${num}`
// }

function zero(func) {
    return func ? func(0) : 0
}
function one(func) {
    return func ? func(1) : 1
}
function two(func) {
    return func ? func(2) : 2
}
function three(func) {
    return func ? func(3) : 3
}
function four(func) {
    return func ? func(4) : 4
}
function five(func) {
    return func ? func(5) : 5
}
function six(func) {
    return func ? func(6) : 6
}
function seven(func) {
    return func ? func(7) : 7
}
function eight(func) {
    return func ? func(8) : 8
}
function nine(func) {
    return func ? func(9) : 9
}

function plus(b) {
    return function (a) {
        return a + b
    }
}
function minus(b) {
    return function (a) {
        return a - b
    }
}
function times(b) {
    return function (a) {
        return a * b
    }
}
function dividedBy(b) {
    return function (a) {
        return a / b
    }
}

console.log(seven(dividedBy(seven())))
console.log(eight(minus(three())))
