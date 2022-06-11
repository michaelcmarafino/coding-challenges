// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// parameters => array of strings, single word strings, no numbers or any other data types. Does casing matter? No

// returns => a new array of words with only 4 letters in it, not more and not less.

// examples => ["Mike", "King", "Sarah"] => ["Mike", "King"]

// pseudocode =>

function friend(friends) {
    // filter friends array by str length. Return only strings that exactly equal length of 4.
    return friends.filter(v => v.length === 4)
}

console.log(friend(["Mike", "King", "Sarah", "Asa", "Hendrix"]))
