// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

//  takes in a number called 'num' that will always be non-negative
//  returns a string with a dash between two odd digits in the num
//  see example above

function insertDash(num) {
    return ("" + num)
        .split("")
        .map((el, i, arr) => {
            if (i === 0) {
                return el
            } else if (el % 2 !== 0 && arr[i - 1] % 2 !== 0) {
                return -el
            } else {
                return el
            }
        })
        .join("")
}

console.log(insertDash(454793), "4547-9-3")
console.log(insertDash(1309711), "1-309-7-1-1")
