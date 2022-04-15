// Objects: The basics

// let user = {}
// user.name = "John"
// user.surname = "Smith"
// user.name = "Pete"
// delete user.name

// console.log(user.name)

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false
//     }
//     return true
// }

// let schedule = {}

// alert(isEmpty(schedule)) // true

// schedule["8:30"] = "get up"

// alert(isEmpty(schedule)) // false

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//     Mike: 200,
//     Hendrix: 50,
// }

// function sumSalaries(obj) {
//     let sum = 0
//     for (let key in obj) {
//         sum += obj[key]
//     }
//     return sum
// }

// console.log(sumSalaries(salaries))

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
// }

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === "number") {
//             obj[key] *= 2
//         }
//     }
// }
// console.log(menu)
// multiplyNumeric(menu)
// console.log(menu)

// Objects references and copying
