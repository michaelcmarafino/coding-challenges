// Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
// count total lowercase letters and then see if that number is even
// Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
//  check if each letter in the string is capital, if at least two are then count it
// Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?)
// check if str.includes("S") if it does then it doesn't count

function checkEntries(str) {
    let arr = str.split(",").filter(el => {
        return (
            noEmptySpaces(el) &&
            cannotContainWords(el) &&
            multipleOfFive(el) &&
            sumOfCharCodes(el) &&
            middleCannotBeE(el) &&
            evenLowerCaseLetters(el) &&
            needsTwoCapitalLetters(el) &&
            cannotContainCapitalS(el)
        )
    })
    return arr.length
}

function noEmptySpaces(str) {
    return str.trim().length === str.length
}

function cannotContainWords(str) {
    return str.toLowerCase().includes("dog") ||
        str.toLowerCase().includes("bone") ||
        str.toLowerCase().includes("bark")
        ? false
        : true
}

function multipleOfFive(str) {
    return str.length % 5 !== 0
}

function sumOfCharCodes(str) {
    return str.charCodeAt(0) + (str.charCodeAt(str.length - 1) % 2) !== 0
}

function middleCannotBeE(str) {
    let middle = Math.ceil(str.length / 2)
    return str[middle]
}

function evenLowerCaseLetters(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let total = str
        .split("")
        .filter(el => alphabet.includes(el.toLowerCase()))
        .reduce((acc, c) => acc + (c.toLowerCase() == c), 0)
    return total % 2 === 0
}

function needsTwoCapitalLetters(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let total = str
        .split("")
        .filter(el => alphabet.includes(el.toLowerCase()))
        .reduce((acc, c) => acc + (c.toUpperCase() == c), 0)
    return total >= 2
}

function cannotContainCapitalS(str) {
    return str.split("").filter(el => el === "S").length === 0
}

console.log(
    checkEntries(
        "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"
    )
)
