require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://mkvermashk:yLE2EQzno2vb4iFk@cluster0.lg3dqkb.mongodb.net/mylibrary')

const connection = mongoose.connection;

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

connection.on('error' , (err)=>{
    console.log('Mongo DB Connection Failed',err);
})

module.exports = connection;