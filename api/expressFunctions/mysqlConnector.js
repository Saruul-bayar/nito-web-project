const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "eu-cdbr-west-02.cleardb.net",
  user: "bf7955c63e47dd",
  password: "384d6c6a",
  database: "heroku_081629a58220486",
  connectionLimit: 10,
});

module.exports = connection;
