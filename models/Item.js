const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// model exported so that we can bring it into other files
module.exports = Item = mongoose.model("item", ItemSchema);
