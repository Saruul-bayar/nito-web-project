const createHandler = require("azure-function-express").createHandler;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "eu-cdbr-west-02.cleardb.net",
  user: "bf7955c63e47dd",
  password: "384d6c6a",
  database: "heroku_081629a58220486",
  connectionLimit: 10,
});

app.get("/api/blogs", (req, res) => {
  connection.query(`SELECT * FROM Blog`, (err, rows) => {
    if (err) return res.send(err);
    return res.send(rows);
  });
});

module.exports = createHandler(app);
