const express = require('express');
const mongoose = require("mongoose");
const port = 4000;
const app = express();
app.use(express.json());


app.use(require('./routes/twitter.route'));
app.use(require('./routes/users.route'));
app.use(require('./routes/comments.route'))


mongoose.connect('mongodb+srv://Akrom:akrom@cluster1.p5qqttz.mongodb.net/Twitter?retryWrites=true&w=majority', () => {
    console.log('mongoose CONNECT');
    app.listen(port, () => {
        console.log('SERVER START')
    })
})