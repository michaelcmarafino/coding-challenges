// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// parameters => a string, case sensitive
// returns => every char in the string doubled
// examples => "helLo" = "hheellLLoo"
// pseudo

function doubleChar(str) {
    // split string into array
    return str
        .split("")
        .map(el => el.repeat(2))
        .join("")
    // loop thru array and apply repeat method 2 times

    // join back into string

    // return string
}
