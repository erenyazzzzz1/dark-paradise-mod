const mongoose = require("mongoose");

module.exports = mongoose.model("loft_uyarılar", new mongoose.Schema({
   user: String,
   uyarılar: Array,
}));