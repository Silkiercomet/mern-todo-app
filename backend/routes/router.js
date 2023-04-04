const express = require('express')
const todoRoutes = express.Router()

const {getTodos} = require("../controlls/controllers")

todoRoutes.get('/', getTodos)

module.exports = todoRoutes