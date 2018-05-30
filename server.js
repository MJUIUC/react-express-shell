// package plugins
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const port = process.env.PORT || 8080;

// connect app to mongo
// mongoose.connect('url', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// This serves the React App
app.use(express.static(path.join(__dirname, '/react-app-build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/react-app-build/index.html'));
});

app.listen(port, () => {
    console.log(`Server active at localhost:${port}`);
    console.log(`React Application Live at http://127.0.0.1:${port}`);
});
