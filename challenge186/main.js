// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
    return url.indexOf("#") === -1 ? url : url.slice(0, url.indexOf("#"))
}

function removeUrlAnchor(url) {
    return url.split("#")[0]
}

console.log(removeUrlAnchor("www.codewars.com#about"))
