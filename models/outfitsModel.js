const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  outfitsSchema = new Schema({
    quantity: { type: Number },
    name: { type: String },
    price: { type: Number },
    size: { type: Number },
    type: { type: String },
    gender: { type: String },
    image: { type: String },
    sale: { type: Boolean },
    new: { type: Boolean },
    description: { type: String },
    rating: { type: Number },
    bin_location: { type: Number },
  }),
  outfits = mongoose.model("outfits", outfitsSchema);
module.exports = outfits;
