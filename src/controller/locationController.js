const express = require("express");
const { locationService } = require("../service/locationService");

const locationController = express.Router();

locationController.post("/load", async (req, res, next) => {
  await locationService.load();
  res.send("done");
});

module.exports = { locationController };
