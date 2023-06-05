const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  name: String,
  location: String,
  province: String,
  off: String,
  open: String,
  close: String,
  fullCharge: String,
  fastCharge: String,
  fastChargeType: String,
  fullChargeCount: String,
  fastChargeCount: String,
  parkingFee: String,
  roadNameAddress: String,
  lotNumberAddress: String,
  companyName: String,
  companyPhone: String,
  latitude: Number,
  longitude: Number,
  geoCoordinates: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: { type: [Number] },
  },
  updatedAt: String,
});

module.exports = mongoose.model("Location", locationSchema);
