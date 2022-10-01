// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// take in a number with type of number
// return a string with numbers expanded out
// 40302 => '40000 + 300 + 2'

function expandedForm(num) {
    // turn number into string
    // split string into individual strings in an array
    // for loop thru each string
    let arr = String(num).split("")
    for (let i = 0; i < arr.length; i++) {
        arr[i] += "0".repeat(arr.length - (i + 1))
    }
    return arr
        .map(Number)
        .filter(el => el !== 0)
        .join(" + ")

    // if number equals 0 we will ignore it (at the end?)
    // use length of array to add zeros to each string
}

const expandedForm = n =>
    n
        .toString()
        .split("")
        .reverse()
        .map((a, i) => a * Math.pow(10, i))
        .filter(a => a > 0)
        .reverse()
        .join(" + ")

console.log(expandedForm(40302))
