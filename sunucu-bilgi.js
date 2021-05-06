const mongoose = require("mongoose")

const loft_sunucu = new mongoose.Schema({
   guild: String,
   ihlal: Number
})

module.exports = mongoose.model("loft_sunucu", loft_sunucu)