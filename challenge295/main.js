// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

// takes in a string of letters and numbers
// returns all numbers in the string as a number type

const filterString = function (value) {
    const nums = "1234567890"
    return Number(
        value
            .split("")
            .filter(el => nums.includes(el))
            .join("")
    )
}

console.log(filterString("aa1bb2cc3dd"), 123)
console.log(filterString("123"), 123)
console.log(filterString("a1b2c3"), 123)
