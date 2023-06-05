const express = require("express");

const testRouter = express.Router();

testRouter.get("/", (req, res) => {
  res.send("this is router page");
});

testRouter.get("/test", (req, res) => {
  res.send("this is test router");
});

module.exports = {
  testRouter,
};
