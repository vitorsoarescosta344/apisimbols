const mongoose = require("mongoose")

const CriptoShema = new mongoose.Schema(
    {
        Symbol:{
            type: String,
            required: true
        },
        Nome:{
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model("Cripto", CriptoShema)