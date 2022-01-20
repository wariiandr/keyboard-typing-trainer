const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter');
const authMiddleware = require('./middlewares/authMiddleware');
const router = require('./routes/router');

const PORT = process.env.PORT || 3000;

const app = express();

// app.use('/', express.static(path.join(__dirname, '../dist')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use('/auth', authRouter);
app.use(authMiddleware);
app.use('/api', router);

async function start() {
    try {
        await mongoose.connect('mongodb+srv://mariia:mariia123@cluster0.gwbks.mongodb.net/keyboard-typing-trainer?retryWrites=true&w=majority')
        app.listen(PORT, () => {
            console.log('Server has been started...');
        })
    } catch (err) {
        console.log(err);
    }
}

start();