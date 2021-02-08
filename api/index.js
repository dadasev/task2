const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Keyword = require('./models/keyword');
const previewedVideo = require('./models/previewedVideo');

mongoose.connect('mongodb://localhost:27017/task2db', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connection OPEN"))
    .catch(err => console.log("Connection FAILED"));

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.post('/keyword', async (req, res) => {
    const newKeyword = new Keyword(req.body);
    await newKeyword.save();
});

app.post('/previewedVideo', async (req, res) => {
    const video = new previewedVideo(req.body);
    await video.save();
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});