const express = require("express");
const app = express();

// middleware to read JSON
app.use(express.json());

// in-memory storage
let todos = [];
let idCounter = 1;

// GET all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// CREATE a todo
app.post("/todos", (req, res) => {
  const todo = {
    id: idCounter++,
    title: req.body.title,
    completed: false,
  };

  todos.push(todo);
  res.status(201).json(todo);
});

// UPDATE a todo
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todo.title = req.body.title ?? todo.title;
  todo.completed = req.body.completed ?? todo.completed;

  res.json(todo);
});

// DELETE a todo
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.json({ message: "Todo deleted" });
});

// START SERVER
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
