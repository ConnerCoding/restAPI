const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');
const postsRoute = require('./routes/posts');
const bodyParser = require('body-parser');
const cors = require('cors');


// Middleware
// app.use('/posts', () => console.log('This is middleware'));
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
    res.send('We are home!');
});



// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('Connected to DB'));

app.listen(3000);