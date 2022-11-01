function last(str) {
    return str
        .split(" ")
        .map(el => el.split("").reverse().join(""))
        .sort()
        .map(el => el.split("").reverse().join(""))
}

console.log(last("man i need a taxi up to ubud"), [
    "a",
    "need",
    "ubud",
    "i",
    "taxi",
    "man",
    "to",
    "up",
])
