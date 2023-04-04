const modelTodo = require("../models/model")

const getTodos = async (req, res) => {
    const queryObject = {}
    try {
        const products = await modelTodo.find(queryObject);
        res.status(200).json(products);
      } catch (err) {
        console.log(err);
        res.status(404).send("not found");
      }
}

module.exports = {getTodos}