// получаем модуль Express
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport')
const path = require('path')
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

const port = process.env.PORT || 5000;

app.use(require('morgan')('dev'));
app.use('/uploads', express.static('uploads'))
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist/client'))

    app.get('*', (req, res) => {
       res.sendFile(
           path.resolve(
               __dirname, 'client', 'dist', 'client', 'index.html'
           )
       )
    })
}


async function start() {
    try {
        //const url = `mongodb+srv://sergeygornih:gilRnAkLHKLyKFKn@cangoweb-cgm6t.mongodb.net/test?retryWrites=true&w=majority`
        await mongoose.connect(keys.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(port, () => {
            console.log(`Server has been started on ${port}`);
            console.log('MongoDB connected.')
        });

    } catch (e) {
        console.log(e)
    }
}

start()

app.use(passport.initialize())
require('./middleware/passport')(passport)


