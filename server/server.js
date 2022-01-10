const express = require('express');
const mongoose = require('mongoose');
// const authRouter = require('./routes/authRouter');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
// app.use('/auth', authRouter);

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