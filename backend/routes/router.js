const express = require('express')
const todoRoutes = express.Router()

const {getTodos,updateTodo,createTodo,deleteTodo} = require("../controlls/controllers")

todoRoutes.route("/").get(getTodos).post(createTodo)
todoRoutes.route("/:userId").patch(updateTodo).delete(deleteTodo)


module.exports = todoRoutes