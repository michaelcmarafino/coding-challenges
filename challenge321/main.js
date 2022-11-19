// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

function capMe(names) {
    return names.map(el => el[0].toUpperCase() + el.toLowerCase().slice(1))
}

console.log(capMe(["jo", "nelson", "jurie"]), ["Jo", "Nelson", "Jurie"])
