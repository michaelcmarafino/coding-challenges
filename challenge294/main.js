// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase = function () {
    if (this.length === 0) return ""
    return this.trim()
        .split(" ")
        .map(el => el[0].toUpperCase() + el.slice(1).toLowerCase())
        .join("")
}

console.log("hello case".camelCase())
