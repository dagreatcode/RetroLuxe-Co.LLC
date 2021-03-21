const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  outfitsSchema = new Schema({
    type: { type: String },
    gender: { type: String },
    image: { type: String },
    description: { type: String },
    bin_location: { type: String },
  }),
  outfits = mongoose.model("outfits", outfitsSchema);
module.exports = outfits;