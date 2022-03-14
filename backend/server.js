require("dotenv").config();
const express = require("express");
const chalk = require("chalk");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8000;

app.use(cors());

const compiler_router = require("./components/compiler/compiler_router");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.get("/test", function (req, res) {
  res.send("test working");
});

app.use("/api/compiler", compiler_router);

app.listen(PORT, () => console.log(chalk.blue.bold(`Server Started ${PORT} `)));
