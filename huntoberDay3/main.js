// [ 'S', 'p', 'a', 'c', 'e' ]

// example key characters -> 'A','_','K','E','Y','!'

// 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
// // implement key replacement function
// ' you could think this is hard to read before replacing the key characters'

function replaceWithSpace(str, arr) {
    let key = arr.join("")
    return str
        .split("")
        .map(el => (key.includes(el) ? " " : el))
        .join("")
}

console.log(
    replaceWithSpace(
        "AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters",
        ["A", "_", "K", "E", "Y", "!"]
    )
)
