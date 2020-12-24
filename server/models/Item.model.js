const { Schema, model } = require("mongoose");

let itemSchema = new Schema({
  name: String,
  description: String,
  quantity: Number,
  price: Number,
});

module.exports = model("Item", itemSchema);
