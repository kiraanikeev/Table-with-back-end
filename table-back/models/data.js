const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Дата: {
        type: String,
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

module.exports = mongoose.model('users', dataSchema)