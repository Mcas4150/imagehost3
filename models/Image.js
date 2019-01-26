const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
let ImageSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("image", ImageSchema);
