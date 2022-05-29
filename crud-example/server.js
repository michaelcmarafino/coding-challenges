const express = require("express")
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient
const app = express()

const connectionString =
    "mongodb+srv://michaelcmarafino:Rllhh2oZ5tOgnUGx@cluster0.xctf8gr.mongodb.net/?retryWrites=true&w=majority"

// Database
MongoClient.connect(connectionString)
    .then(client => {
        console.log("Connected to Database")
        const db = client.db("crud-example")
        const quotesCollection = db.collection("quotes")
        // Middleware
        app.use(bodyParser.urlencoded({ extended: true }))
        // CRUD handlers
        app.get("/", (req, res) => {
            res.sendFile(__dirname + "/index.html")
        })

        app.post("/quotes", (req, res) => {
            quotesCollection
                .insertOne(req.body)
                .then(result => {
                    res.redirect("/")
                })
                .catch(err => console.error(err))
        })

        app.listen(8000, () => {
            console.log("Listening on PORT 8000...")
        })
    })
    .catch(err => console.error(err))
