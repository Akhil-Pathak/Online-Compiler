const express = require("express");
const chalk = require("chalk");

const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;

app.use(cors());

app.get("/test", function (req, res) {
  res.send("test working");
});

app.listen(PORT, () => console.log(chalk.blue.bold(`Server Started ${PORT} `)));
