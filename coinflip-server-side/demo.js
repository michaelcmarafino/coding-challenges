const http = require("http")
const fs = require("fs")
const url = require("url")

http.createServer((req, res) => {
    const page = url.parse(req.url).pathname
    if (page == "/") {
        fs.readFile("demofile.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(data)
            res.end()
        })
    } else if (page == "/css/styles.css") {
        fs.readFile("css/styles.css", (err, data) => {
            res.write(data)
            res.end()
        })
    } else if (page == "/js/main.js") {
        fs.readFile("js/main.js", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/javascript" })
            res.write(data)
            res.end()
        })
    } else if (page == "/api") {
        res.writeHead(200, { "Content-Type": "application/json" })
        let randomNum = Math.ceil(Math.random() * 2)
        let answer = randomNum === 1 ? "Heads" : "Tails"
        const objToJson = {
            answer: answer,
        }
        res.end(JSON.stringify(objToJson))
    }
}).listen(3000, console.log(`Server running on PORT 3000...`))
