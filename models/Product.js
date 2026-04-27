const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String,
  category: String,
  subcat: String,
  aromas: [String],
  sexo: String
});

module.exports = mongoose.model("Product", productSchema);
