const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Todo = require("./models.js");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://neklz1:odfocXO8BHsmUFLb@cluster0.watgx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

app.post("/api/todos", async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
      completed: req.body.completed || false,
    });
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

app.put("/api/todos/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, completed: req.body.completed },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

app.delete("/api/todos/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
