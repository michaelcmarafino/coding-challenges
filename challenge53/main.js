// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.

magNumber = info =>
    Math.ceil(
        (info[1] * 3) / { PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5 }[info[0]]
    )

function magNumber(info) {
    const weapons = {
        PT92: 17,
        M4A1: 30,
        M16A2: 30,
        PSG1: 5,
    }
    return Math.ceil((info[1] * 3) / weapons[info[0]])
}
