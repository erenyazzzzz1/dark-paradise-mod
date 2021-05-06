const mongoose = require("mongoose");

module.exports = mongoose.model("loft_roller", new mongoose.Schema({
    user: String, 
    roller: Array
}));
