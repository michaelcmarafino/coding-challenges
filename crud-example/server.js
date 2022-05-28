const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/quotes", (req, res) => {
    console.log("HELLOOOOO")
})

app.listen(8000, () => {
    console.log("Listening on PORT 8000...")
})
