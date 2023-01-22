// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
    let arr = string.split(" ")
    return arr
        .map(el =>
            el
                .split("")
                .map((el, i) =>
                    i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()
                )
                .join("")
        )
        .join(" ")
}

console.log(toWeirdCase("String"), "StRiNg")
console.log(toWeirdCase("Weird string case"), "WeIrD StRiNg CaSe")
