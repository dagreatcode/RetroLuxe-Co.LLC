const mongoose = require("mongoose"),
  db = require("../models");
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/retroluxe_db"
);
const outfitsSeedDB = [
  {
    message_text:
      "You have power over your mind - not outside events. Realize this, and you will find strength.",
  }
];
db.Outfits.remove({})
  .then(() => db.Outfits.collection.insertMany(outfitsSeedDB))
  .then((a) => {
    console.log(a.result.n + " records inserted!"), process.exit(0);
  })
  .catch((a) => {
    console.error(a), process.exit(1);
  });