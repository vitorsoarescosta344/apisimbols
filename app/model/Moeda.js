const mongoose = require("mongoose")

const MoedaShema = new mongoose.Schema(
    {
        Symbol:{
            type: String,
            required: true,
            unique: true
        },
        nome:{
            type: String,
            required: true,
            unique: true
        }
    }
)

module.exports = mongoose.model("Moeda", MoedaShema)