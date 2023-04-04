const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    todo:{type:String, required:true},
    description:{type:String},
    createdAt: { type: Date, default: Date.now },
    check:{type:Boolean, default:false}
})

const modelTodo = mongoose.model("todos",todoSchema)

module.exports = modelTodo