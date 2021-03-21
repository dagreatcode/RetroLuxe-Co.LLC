const mongoose = require("mongoose"),
  db = require("../models");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/retroluxe_db");
const outfitsSeedDB = [
  {
    type: "Pants",
    gender: "Female",
    image: "/client/src/img/product/category-jeans-colour-bg-2/jpg",
    description: "High Riders",
    bin_location: 1,
  },
];
db.Outfits.remove({})
  .then(() => db.Outfits.collection.insertMany(outfitsSeedDB))
  .then((a) => {
    console.log(a.result.n + " records inserted!"), process.exit(0);
  })
  .catch((a) => {
    console.error(a), process.exit(1);
  });
