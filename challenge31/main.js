// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// There are preloaded dictionary you can use, named NATO
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

function to_nato(words) {
    let newNATO = Object.assign(NATO, {
        "!": "!",
        ",": ",",
        ".": ".",
        "?": "?",
    })
    return words
        .toLowerCase()
        .split("")
        .filter(letter => letter.trim())
        .map(letter => newNATO[letter])
        .join(" ")
}
