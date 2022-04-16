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

// Objects methods, "this"

// OOP Calculator

// let calculator = {
//     read() {
//         let a = Number(prompt("First value?"))
//         let b = Number(prompt("Second value?"))
//         this.a = a
//         this.b = b
//     },
//     sum() {
//         return this.a + this.b
//     },
//     multiply() {
//         return this.a * this.b
//     },
// }

// console.log(calculator.read())
// console.log(calculator.a)
// console.log(calculator.b)
// alert(calculator.sum())
// alert(calculator.multiply())
let ladder = {
    step: 0,
    up() {
        this.step++
        return this
    },
    down() {
        this.step--
        return this
    },
    showStep: function () {
        // shows the current step
        alert(this.step)
        return this
    },
}

// ladder.up()
// ladder.up()
// ladder.down()
// ladder.showStep() // 1
// ladder.down()
// ladder.showStep() // 0

ladder.up().up().down().showStep().down().showStep() // shows 1 then 0
