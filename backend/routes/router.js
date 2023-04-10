const express = require('express')
const todoRoutes = express.Router()

const {getTodos,updateTodo,createTodo} = require("../controlls/controllers")

todoRoutes.route("/").get(getTodos).post(createTodo)
todoRoutes.route("/:userId").patch(updateTodo)


module.exports = todoRoutes