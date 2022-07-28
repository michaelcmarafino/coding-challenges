// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

// Get a mixed array of numbers and also strings of integers

// return the result of the string integers added together and subtract the integer numbers, return result as a number

//

function divCon(x) {
    return x.reduce((acc, c) => {
        if (typeof c === "string") {
            return acc - +c
        } else {
            return acc + c
        }
    }, 0)
}

console.log(divCon([9, 3, "7", "3"]))
