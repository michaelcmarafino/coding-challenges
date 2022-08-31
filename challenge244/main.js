// *** No Loops Allowed ***

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// get an array (a), which can contain numbers or strings, and a value (x), which can be a number or string
// returns true or false

function check(a, x) {
    return a.some(el => el === x)
    // return a.includes(x)
}
