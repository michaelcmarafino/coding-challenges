// It's important to establish that a small is indeed coming from the baby before you begin the process of changing, because time is now percious and you don't want any false alarms.

// The trouble is that your partner is also smelly...

// You will be given a 2-dimensional array (p) that looks similar to below. Empty spots are represented by 'o' and your baby's bottom is represented by 'B'. Any scent is represented by '~'.

// Example 1: Baby smell

// [
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', 'B', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// ]
// Example 1: Partner smell

// [
// [ 'B', '~', '~', '~', 'o', 'o', 'o'],
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o']
// ]
// If the smell is rising vertically, it's safe to say it's coming from the baby - return "Get the wipes!". If the smell is moving horizontally.. it's probably your partner trying to pass it off as the baby - return "You disgust me!". in both cases the three scents must be connected to the baby.

// If there is no scent, or there are less than three in a row, there is no baby, or they do not form a straight vertical of horizontal line, return "Calm before the storm".

// Lines of scent cannot pass through the baby (or if they do they dont count).

function pooRoulette(p) {
    let arr = p.reduce((acc, c) => acc.concat(c), [])
    let butt = arr.indexOf("B")

    if (
        (arr[butt + 1] == "~" &&
            arr[butt + 2] == "~" &&
            arr[butt + 3] == "~") ||
        (arr[butt - 1] == "~" && arr[butt - 2] == "~" && arr[butt - 3] == "~")
    ) {
        return "You disgust me!"
    } else if (
        arr[butt - 7] == "~" &&
        arr[b - 14] == "~" &&
        arr[b - 21] == "~"
    ) {
        return "Get the wipes!"
    }
    return "Calm before the storm"
}
