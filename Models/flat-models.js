const mongoose = require("mongoose");
const FlatSchema = new mongoose.Schema(
  {
    address_full: { type: String, required: true },
    district: String,
    area_sqm: Number,
    rooms: { type: Number, default: 1 },
    rent: Number,
    landlord: String
  },
  { versionKey: false }
);

const Flat = mongoose.model("flats", FlatSchema);

module.exports = { FlatSchema, Flat };
