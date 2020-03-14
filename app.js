// получаем модуль Express
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');
const keys = require('./config/keys');
const mysql = require('mysql');
const MongoClient = require("mongodb").MongoClient;
// создаем приложение
const app = express();

// создаем объект MongoClient и передаем ему строку подключения
// const mongoClient = new MongoClient(keys.mongoURI, { useNewUrlParser: true });
// mongoClient.connect(function(err, client){
//
//     if(err){
//         return console.log(err);
//     }
//     // взаимодействие с базой данных
//     console.log('MongoDB connected.')
//     client.close();
// });

// mongoose.connect(keys.mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(()=> console.log('MongoDB connected.'))
//     .catch(()=> console.log(error));

// const connectDB = async () => {
//     try {
//         await mongoose.connect(keys.mongoURI, {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useUnifiedTopology: true,
//         });
//         console.log("MongoDB Conected")
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// };
//
// connectDB();

// const connection = mysql.createConnection({
//     host:'rivasgames.mysql',
//     database: 'rivasgames_cango',
//     user: 'rivasgames_mysql',
//     password: 'Ae4K_hop'
// });
// connection.connect(function(err){
//     if (err) {
//         return console.error("Ошибка: " + err.message);
//     }
//     else{
//         console.log("Подключение к серверу MySQL успешно установлено");
//     }
// });
// // закрытие подключения
// connection.end(function(err) {
//     if (err) {
//         return console.log("Ошибка: " + err.message);
//     }
//     console.log("Подключение закрыто");
// });



//app.use(morgan('dev'));
app.use(require('morgan')('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);





module.exports = app;