const mongoose = require("mongoose");

module.exports = mongoose.model("loft_extraMute", new mongoose.Schema({
    user: String, 
    array: Array
}));