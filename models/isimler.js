const mongoose = require("mongoose");

module.exports = mongoose.model("loft_isimler", new mongoose.Schema({
    user: String, 
    isimler: Array
}));