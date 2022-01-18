const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Дата: {
        type: Number,
    },
    Название: {
        type: String,
    },
    Количество: {
        type: Number,
    },
    Расстояние: {
        type: Number,
    },
})

module.exports = mongoose.model('data', dataSchema)