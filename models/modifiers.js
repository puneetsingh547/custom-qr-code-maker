const mongoose = require("mongoose");

const modifiers = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  restaurantId: {
    type: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  multipleItems: String,
  modifierType: [
    {
      enable: String,
      name: String,
      price: Number,
      unit: Number,
    },
  ],
  forceMaximum: Number,
  forceMinimum: Number
});

module.exports = mongoose.model("modifiers", modifiers);
