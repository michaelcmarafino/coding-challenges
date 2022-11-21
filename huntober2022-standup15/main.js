// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s =>
    s
        .split(" ")
        .filter((el, i, arr) => el !== arr[i - 1])
        .join(" ")

console.log(
    removeConsecutiveDuplicates(
        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
    ),
    "answer: alpha beta gamma delta alpha beta gamma delta"
)
