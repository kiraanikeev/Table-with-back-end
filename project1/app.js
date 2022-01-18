const express = require('express'); 
const mongoose = require('mongoose'); 
const router = require('express').Router(); 
// const userRouter = require('./routes/user'); 

const TableData = require('../models/data'); 

const app = express(); 

const { PORT = 8080 } = process.env; 

app.use(express.json()); 
app.get('/', (req, res) => {
    TableData.find({})
    .then((data) => {
        res.send(data);
        console.log(data);
    })
    .catch(() => res.status(500).send({ message: '500- Не удалось получить данные из базы данных. Произошла ошибка' })); 
})
// app.use((req, res, next) => { 
//   req.user = { 
//     _id: '615ec84e34f958002d6de319', 
//   }; 
//   next(); 
// }); 
// app.use(userRouter); 
// app.use((req, res) => { 
//   res.status(404).send({ message: 'Не удалось получить данные' }); 
// }); 
mongoose.connect('mongodb://localhost:27017/mydb', { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false 
}); 

app.listen(PORT); 