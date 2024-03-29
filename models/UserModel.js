const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  UserSchema = new Schema({
    firstName: String,
    lastName: String,
    birthday: Date,
    phoneNumber: Number,
    password: String,
    email: String,
  }),
  User = mongoose.model("User", UserSchema);
module.exports = User;
