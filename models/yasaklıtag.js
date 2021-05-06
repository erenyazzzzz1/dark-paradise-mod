const mongoose = require("mongoose");

module.exports = mongoose.model("loft_yasaklıtag", new mongoose.Schema({
    guild: String,
  taglar: Array
}));