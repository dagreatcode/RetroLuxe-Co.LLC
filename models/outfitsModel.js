const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  outfitsSchema = new Schema({
    message_text: { type: String },
    message_on: { type: Boolean },
  }),
  outfits = mongoose.model("outfits", outfitsSchema);
module.exports = outfits;