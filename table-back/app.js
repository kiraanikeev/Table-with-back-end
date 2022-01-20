const express = require('express');

const mongoose = require('mongoose');
const TableData = require('./models/data');

const { PORT = 8080 } = process.env;

const app = express();

app.use(express.json()); 
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.get('/', (req, res) => {
    TableData.find({})
    .then((data) => {
        res.send(data);
    })
    .catch(() => res.status(500).send({ message: '500- Не удалось получить данные из базы данных. Произошла ошибка' })); 
})

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})