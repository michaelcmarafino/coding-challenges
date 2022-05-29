// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// parameters => string with multiple words, spaces in between, so basically a sentence or two.

// returns => The same string (sentence) but with the vowels removed.  Same punctuation and capitilzation. Y is not considered a vowel here.

// examples => "You suck!" would return "Y sck!"

// pseudocode =>

function disemvowel(str) {
    let vowels = ["a", "A", "E", "e", "I", "i", "O", "o", "U", "u"]
    // split the string into an array using .split(" ").  Split into individual words
    // loop thru array
    // for each word in loop split it into an array
    return str
        .split(" ")
        .map(word =>
            word
                .split("")
                .filter(letter => vowels.indexOf(letter) === -1)
                .join("")
        )
        .join(" ")

    // for each word that is split into array remove vowels and then join back together into string
    // join all words back into big sentence string
}

console.log(disemvowel("HEllo loser"))
