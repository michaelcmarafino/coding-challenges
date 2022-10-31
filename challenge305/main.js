// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// create two separate loops so complexity is O(n)?
// I know a loop within a loop is quadratic (very bad)
function duplicateEncode(str) {
    let answer = ""
    let lowerCaseStr = str.toLowerCase()
    // loop thru str and for each char count how many instances and put into object
    let obj = {}
    for (let i = 0; i < lowerCaseStr.length; i++) {
        obj[lowerCaseStr[i]] = (obj[lowerCaseStr[i]] || 0) + 1
    }

    // loop thru object that was created and if instance is greater than 1 put ")" else put "("
    for (let i = 0; i < str.length; i++) {
        if (obj[lowerCaseStr[i]] > 1) {
            answer += ")"
        } else if (obj[lowerCaseStr[i]] === 1) {
            answer += "("
        }
    }

    return answer
}

console.log(duplicateEncode("din"), "(((")
console.log(duplicateEncode("recede"), "()()()")
console.log(duplicateEncode("Success"), ")())())")
console.log(duplicateEncode("(( @"), "))((")
