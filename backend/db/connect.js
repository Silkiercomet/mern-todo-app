const mongoose = require("mongoose")

const connectDB = (url) => mongoose
.connect(url)
.then(() => console.log("conected to mongodb"))
.catch((err) => console.log(err))

module.exports = connectDB