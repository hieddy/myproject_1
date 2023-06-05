const express = require("express");
const { stationsService } = require("../service/stationsService");

const stationsController = express.Router();

stationsController.get("/test", (req, res) => {
  res.send("this is a station info router");
});

stationsController.get("/all", async (req, res) => {
  const result = await stationsService.findAllStations();
  res.json(result);
});

stationsController.get("/anytime", async (req, res) => {
  const result = await stationsService.findStationsWithNoHoliday();
  res.json(result);
});

stationsController.get("/", async (req, res) => {
  const queryData = req.query;
  const result = await stationsService.findStationsByQuery(queryData);
  res.json(result);
  // res.send("querytesting!!");
});

module.exports = {
  stationsController,
};
