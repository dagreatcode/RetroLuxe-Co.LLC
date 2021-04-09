const mongoose = require("mongoose"),
  db = require("../models");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/retroluxe_db");
const outfitsSeedDB = [
  {
    quantity: 20,
    name: "Denim",
    size: 12,
    type: "Pants",
    gender: "Female",
    image: "/client/src/img/product/category-jeans-colour-bg-2/jpg",
    sale: true,
    new: false,
    description: "High Riders",
    rating: 5,
    bin_location: 1,
  },
  {
    quantity: 10,
    name: "denim jacket",
    size: 7,
    type: "jacket",
    gender: "male",
    image: "/client/src/img/product/category-jeans-colour-bg-2/jpg",
    sale: true,
    new: false,
    description: "short cut",
    rating: 3,
    bin_location: 2
  },
  {
    "quantity": 2,
    "name": "t shirt",
    "size": 4,
    "type": "shirt",
    "gender": "male",
    "image": "/client/src/img/product/category-jeans-colour-bg-2/jpg",
    "sale": true,
    "new": false,
    "description": "short cut",
    "rating": 3,
    "bin_location": 2
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
