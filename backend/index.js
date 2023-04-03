const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv");
const app = express()
const mongoose = require("mongoose")

app.use(bodyParser.json())
app.use(cors)
dotenv.config({path: "./config.env"})

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("conected to mongodb"))
.catch((err) => console.log(err))

app.listen(process.env.PORT, () => {
    console.log(`server is connected at ${process.env.PORT} and the uri is ${process.env.MONGO_URI}`)
})