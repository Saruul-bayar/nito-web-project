const createHandler = require("azure-function-express").createHandler;
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors({ credentials: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const client = path.join(__dirname, "..", "/src/client");

app.use(express.static("../../src/client"));
app.get("/api/home", (req, res) => {
  // res.send("HOME");
  // res.sendFile(client + `/views/index.html`);
});

module.exports = createHandler(app);
