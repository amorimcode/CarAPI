const mongoose = require('mongoose')

const Car = mongoose.Schema(
    {
        name: { type: String, required: true },
        brand: { type: String, required: true },
        model: { type: String, required: true },
        year: { type: String, required: true },
        fuel: { type: String, required: true },
        color: { type: String, required: true },
        price: { type: Number, required: true },

    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('car', Car)