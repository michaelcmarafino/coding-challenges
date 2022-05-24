// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// parameters => h is the number of hours between 0 and 23, m is the number of minutes between 0 and 59, s is the number of seconds between 0 and 59
// returns => one number which this total amount of time since midnight in milliseconds

// h = 1, m = 1, s = 1  expect
function past(h, m, s) {
    // 3,600,000 ms in an hour
    // 60,000 ms in a minute
    // 1000 ms in a second
    return h * 3600000 + m * 60000 + s * 1000
}
