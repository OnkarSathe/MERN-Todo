const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const express = require("express");
const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({ msg: "Sent wrong inputs." });
  } else {
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
    res.json({
      msg: "Todo created.",
    });
  }
});

app.get("/todo", async (req, res) => {
  const todos = await todo.find();
  res.json({ msg: todos });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({ msg: "Sent wrong inputs." });
  } else {
    await todo.update(
      {
        _id: req.body.id,
      },
      {
        completed: true,
      }
    );
    res.json({ msg: "Todo marked as completed." });
  }
});

app.listen(3000, () => {
  console.log("Server has started");
});
