const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send("hello world")
});

routes.post("/devs", (req, res) => {
  console.log(req.body);
  return res.json({ q: true});
});

module.exports = routes; 