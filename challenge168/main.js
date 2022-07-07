// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
    let tower = []
    for (let i = 1; i <= nFloors * 2; i += 2) {
        tower.push("*".repeat(i))
    }
    let lastElementLength = tower[tower.length - 1].length
    return tower.map(el => {
        let sideLength = Math.floor((lastElementLength - el.length) / 2)
        return (el = " ".repeat(sideLength) + el + " ".repeat(sideLength))
    })
}

function towerBuilder(n) {
    return Array.from({ length: n }, function (_, k) {
        const spaces = " ".repeat(n - k - 1)
        return spaces + "*".repeat(k + k + 1) + spaces
    })
}

console.log(towerBuilder(6))
