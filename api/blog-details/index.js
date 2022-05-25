const express = require("../expressFunctions/server");
const mysqldb = require("../expressFunctions/mysqlConnector");

express.app.get("/api/blog-details/:id", (req, res) => {
  const id = req.params.id;
  mysqldb.query(`SELECT * FROM Blog WHERE id = ${id}`, (err, rows) => {
    if (err) return res.send(err);
    console.log(id);
    return res.send(rows);
  });
});

module.exports = express.createHandler(express.app);
