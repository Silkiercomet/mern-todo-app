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
  try {
    // tomamos el parametro (es definido por :userId en la url)
    const { userId } = req.params;
    // tomamos los query y los enviamos todos a remplazar los querys presentes en userId
    const modifiedTodo = await modelTodo.findByIdAndUpdate(userId, req.query, {
      new: true,
    });
    res.status(200).send(modifiedTodo);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createTodo = async (req, res) => {
  const { todo, description } = req.query;

  const newTodo = new modelTodo({
    todo: todo,
  });

  if (description) {
    newTodo["description"] = description;
  }
  try {
    let output = await newTodo.save();
    res.send(output);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteTodo = async (req, res) => {
  const { userId } = req.params;

  try {
    const deletedItem = await modelTodo.findByIdAndDelete(userId);
    res.send(deletedItem);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getTodos, updateTodo, createTodo, deleteTodo };
