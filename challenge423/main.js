// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

function peopleWithAgeDrink(old) {
    let text
    switch (true) {
        case old < 14:
            text = "drink toddy"
            break
        case old < 18:
            text = "drink coke"
            break
        case old < 21:
            text = "drink beer"
            break
        default:
            text = "drink whisky"
    }
    return text
}

console.log(peopleWithAgeDrink(13))
