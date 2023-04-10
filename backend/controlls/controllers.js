const modelTodo = require("../models/model");

const getTodos = async (req, res) => {
  const queryObject = {};

  try {
    const products = await modelTodo.find(queryObject);
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(404).send("not found");
  }
};

const updateTodo = async (req, res) => {
  // tomamos el parametro (es definido por :userId en la url)
  const { userId } = req.params;
  // tomamos los query
  const { todo, description } = req.query;
  console.log(userId, description);
  res.status(200).json(todo);
};

const createTodo = async (req, res) => {
  const { todo, description } = req.query;

  const newTodo = new modelTodo({
    todo: todo,
  });

  if (description) {
    newTodo["description"] = description;
  }
  try{
    await newTodo.save();
  } catch(err){
    console.log(err)
  }
};

module.exports = { getTodos, updateTodo, createTodo };
