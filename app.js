const express = require("express");
const mongoose = require("mongoose");
const schedule_itemRoutes = require("./routes/schedule_itemRoutes");
const cors = require("cors");

const app = express();

const dbURI =
  "mongodb+srv://user1:haslo321@chairman.7penp.mongodb.net/chairman-app?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((resolved) => app.listen(5000), console.log("connected to db"))
  .catch((err) => console.log(err));

// middleware & static files
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //accepting form data

app.get("/", (req, res) => {
  res.redirect("/schedule");
});

app.use("/schedule", schedule_itemRoutes);

//404 page
app.use((req, res) => {
  res.status(404).send({ error: "Page not found" });
});
