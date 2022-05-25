const createHandler = require("azure-function-express").createHandler;
const express = require("express");
const app = express();
app.use(express.static("../../src"));

module.exports = {
  app,
  createHandler,
};
