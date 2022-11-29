// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.
//1 - num no funny biz
function fizzBuzz(num) {
    let ans = []
    for (let i = 1; i <= num; i++) {
        if (i % 6 === 0) {
            ans.push("fizzBuzz")
        } else if (i % 2 === 0) {
            ans.push("fizz")
        } else if (i % 3 === 0) {
            ans.push("buzz")
        } else {
            ans.push(i)
        }
    }
    return ans.join(",")
}

console.log(fizzBuzz(6), "answer: 1,fizz,buzz,fizz,5,fizzBuzz")
console.log(fizzBuzz(8), "answer: 1,fizz,buzz,fizz,5,fizzBuzz,7,fizz")
