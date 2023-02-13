// pasword: Pqsx3JLvIBgh31kc

const exprees = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = exprees();

// MiddleWares
// app.use("/", (req, res, next) => {
//   res.send("This is our start app");
// });
app.use(exprees.json());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://admin:Pqsx3JLvIBgh31kc@cluster0.rou7vpo.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
