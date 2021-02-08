const mongoose = require('mongoose');

const previewedVideoSchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: true
    },
    title: String,
    description: String
});
const PreviewedVideo = mongoose.model('PreviewedVideo', previewedVideoSchema);


module.exports = PreviewedVideo;