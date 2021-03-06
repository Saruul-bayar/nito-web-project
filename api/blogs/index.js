const express = require("../expressFunctions/server");
const mysqldb = require("../expressFunctions/mysqlConnector");

express.app.get("/api/blogs", (req, res) => {
  mysqldb.query(`SELECT * FROM Blog`, (err, rows) => {
    if (err) return res.send(err);
    // console.log(rows);
    return res.send(rows);
  });
});

module.exports = express.createHandler(express.app);
