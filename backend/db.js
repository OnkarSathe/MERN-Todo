const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://onkarsathe939:Onkar123@cohort.nmav0o9.mongodb.net/todo?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
