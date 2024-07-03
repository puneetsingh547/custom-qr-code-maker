const express = require("express");
const ejs = require("ejs");
const path = require("path");
require('dotenv').config();
const router = require("./routes");
const mongodbConnection = require('./db/connection')
const cors = require('cors')

const app = express();
app.use(cors('*'))
app.use(express.json());
app.use(express.static("public"));
app.use("/", router);

app.engine("html", ejs.__express);
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "html");

mongodbConnection()

app.listen(4000, () =>
  console.log("Server runing on port :: http://localhost:4000")
);
