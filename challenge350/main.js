// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function gordon(a) {
    return a
        .split(" ")
        .map(el => {
            if (el.includes("a")) {
                el = el.replaceAll("a", "@")
            }
            if (el.includes("A")) {
                el = el.replaceAll("A", "@")
            }
            if (
                el.includes("e") ||
                el.includes("i") ||
                el.includes("o") ||
                el.includes("u")
            ) {
                el = el.replaceAll("e", "*")
                el = el.replaceAll("i", "*")
                el = el.replaceAll("o", "*")
                el = el.replaceAll("u", "*")
            }

            return el.toUpperCase() + "!!!!"
        })
        .join(" ")
}

console.log(gordon("Hey you there apple"))
