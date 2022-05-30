// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// parameters => string of numbers separated by a space, can be negative, 0 or positive numbers. All numbers are integers. Always be at least one number given.

// return => highest and lowest number in string format separated by a space, highest number then lowest number.

// examples => "1 2 3" => "3 1"

// pseudocode =>

function highAndLow(numbers) {
    // split the string of numbers into an array
    // turn all indiviudal string numbers into type number
    let numsArr = numbers.split(" ").map(n => Number(n))
    // use spread operator inside of Math.max and Math.min
    let max = Math.max(...numsArr)
    let min = Math.min(...numsArr)
    // Turn each value from max and min into strings and concatenate, with max first and min second, then return this value
    return max + " " + min
}

console.log(highAndLow("1 23 -1 4 0 -1000 1409"))
