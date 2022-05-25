const createHandler = require("azure-function-express").createHandler;
const express = require("express");
const app = express();

module.exports = { app, createHandler };
