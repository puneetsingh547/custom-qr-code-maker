const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var website = new Schema({
  banner_img: String,
  top_line_bio: String,
  banner_heading: String,
  banner_description: String,
  about_heading: String,
  about_middle_line: String,
  about_description: String,
  contract_address: String,
  contract_email: String,
  contract_phone: String,
});
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  username: String,
  firstName: String,
  lastName: String,
  password: String,
  website: website
});

module.exports = mongoose.model("user", UserSchema);
