const mongoose = require("mongoose");

module.exports = mongoose.model("loft_kayıt", new mongoose.Schema({
   user: String,
   erkek: Number,
   kadın: Number,
   kayıtlar: Array
}));