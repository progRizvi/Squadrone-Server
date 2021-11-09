const express = require("express")
const { MongoClient } = require('mongodb');
require("dotenv").config()
const cors = require("cors")


const app = express()
const port = process.env.PORT || 8000
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6doss.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        client.connect()
        const database = client.db("squadrone")
        const productsCollection = database.collection("products")
    } finally {
        // await client.close()
    }
}
run().catch(console.dir)
app.get("/", (req, res) => {
    res.send("Hello, This is from node js. this is first page.")
})

app.listen(port)