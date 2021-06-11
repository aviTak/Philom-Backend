const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linkSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    url: {
      type: String,
      required: true
    },

    type: {
      type: String,
      required: true
    }
  },

  {
    collection: "Files"
  }
);

module.exports = mongoose.model("Link", linkSchema);
