myArray = ["abc", "xyz", 1, 2, "Hey!"]

function moveLeft(input, arr) {
    let originalIndex = [...myArray].indexOf(input)
    if (arr.indexOf(input) === 0) {
        return arr
    }
    arr.splice(arr.indexOf(input), 1)
    arr.splice(originalIndex - 1, 0, input)
}

function moveRight(input, arr) {
    let originalIndex = [...myArray].indexOf(input)
    if (arr.indexOf(input) === arr.length - 1) {
        return arr
    }
    arr.splice(arr.indexOf(input), 1)
    arr.splice(originalIndex + 1, 0, input)
}

// call move left function with 'xyz' and myArray as arguments
moveLeft("xyz", myArray)
console.log(myArray, ["xyz", "abc", 1, 2, "Hey!"]) // ['xyz', 'abc', 1, 2, 'Hey!']

// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
moveLeft("xyz", myArray)
console.log(myArray, ["xyz", "abc", 1, 2, "Hey!"]) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// call move right function this time, with 2 and myArray as arguments
moveRight(2, myArray)
console.log(myArray, ["xyz", "abc", 1, "Hey!", 2]) // ['xyz', 'abc', 1, 'Hey!', 2]

// call move right function again, same arguments
// Note that 2 is already as far right as it can go
moveRight(2, myArray)
console.log(myArray, ["xyz", "abc", 1, "Hey!", 2]) // ['xyz', 'abc', 1, 'Hey!', 2] no change
