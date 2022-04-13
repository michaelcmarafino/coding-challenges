// Write a function that returns a string in which firstname is swapped with last name.
// nameShuffler('john McClane'); => "McClane john"

function nameSuffle(str) {
    return str.split(" ").reverse().join(" ")
}
