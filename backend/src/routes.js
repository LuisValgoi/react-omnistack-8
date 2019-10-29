const express = require("express");
const routes = express.Router();
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");

routes.post("/devs", DevController.store);
routes.post("/devs/:devId/likes", LikeController.store);

module.exports = routes; 