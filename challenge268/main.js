// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(words) {
    const alpha = " abcdefghijklmnopqrstuvwxyz"
    const score = word =>
        word.split("").reduce((a, b) => a + alpha.indexOf(b), 0)

    return words
        .split(" ")
        .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
        .sort((a, b) => a.score - b.score || b.pos - a.pos)
        .pop().word
}

console.log(high("man i need a taxi up to ubud"))
