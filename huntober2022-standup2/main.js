// Make sure you understand these before taking a look at the question:
// Replace (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
// Split (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

// From: https://www.codewars.com/kata/514a024011ea4fb54200004b

// Hint: Use replace on the parts of the url you want gone. You can replace with an empty string ''. Then split the string using . as the seperator and take the first part [0]

// Today's solution: https://replit.com/@leonanoel/fizzbuzz-huntober2022#index.js

// take in a string that is a url. it should only be a string with all lowercase letters.  Will it ever be something other than a url, would it ever be an empty string?
// return just the domain name as a string (should not into the https://www or the .com)
//

function domainName(url) {
    // replace the stuff upfront
    // split grabbing the first value
    return url
        .replace("https://", "")
        .replace("http://", "")
        .replace("www.", "")
        .split(".")[0]
}

console.log(domainName("http://github.com/carbonfive/raygun", "github"))
console.log(domainName("http://www.zombie-bites.com", "zombie-bites"))
console.log(domainName("https://www.cnet.com", "cnet"))
