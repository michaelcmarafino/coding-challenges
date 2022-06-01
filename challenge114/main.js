// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

// parameters => a string of letters, capital or lowercase letters with a "-" separating each block of letters

// returns => a string of letters, multiply each letter by its position starting with 1, first letter is capitalized

// examples => accum("abcd")      "A-Bb-Ccc-Dddd"

// pseudocode =>

function accum(s) {
    return s
        .split("")
        .map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
        .join("-")
}
