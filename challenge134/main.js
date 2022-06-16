// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

//  a single string of a single word or multiple words separated by spaces

// returns all words that are below five letters long in the same order but if they are five or longer than that word is reversed.  The sentence is in the same order.

// example => "This is another test" returns "This is rehtona test"

function spinWords(string) {
    return string
        .split(" ")
        .map(word =>
            word.length < 5 ? word : word.split("").reverse().join("")
        )
        .join(" ")
}
