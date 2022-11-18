function averageLength(arr) {
    // sum the length of every string and then divide by the length of the array
    // map thru array and repeat by that sum
    const avg = Math.round(
        arr.reduce((acc, c) => acc + c.length, 0) / arr.length
    )
    return arr.map(el => el[0].repeat(avg))
}

console.log(averageLength(["u", "y"]), "['u','y']")
console.log(averageLength(["aa", "bbb", "cccc"]), "['aaa','bbb', 'ccc']")
console.log(
    averageLength(["aa", "bb", "ddd", "eee"]),
    "['aaa','bbb', 'ddd', 'eee']"
)
