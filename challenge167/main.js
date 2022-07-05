// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// takes in a string that is one word

// returns a string that, if had camel casing, then has a space where that casing was but still has the casing intact

// "badCat" => "bad Cat"

function solution(string) {
    return string
        .split("")
        .map(el => (el === el.toUpperCase() ? (el = ` ${el}`) : el))
        .join("")
}

console.log(solution("badCat"))
