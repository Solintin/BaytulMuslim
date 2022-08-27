const mongoose = require('mongoose');

const lectureSchema = mongoose.Schema({
    title: {
        type : String,
        required : [true, "Please provide a title"]
    },
    src: {
        type : String,
        required : [true, "Please provide a lecture link"]
    },
    artist: {
        type : String,
        required : [true, "Please provide a lecture artist name"]
    },
    language: {
        type : String,
        required : [true, "Please provide a lecture language"]
    },
    tags: {
        type : [String],
        required : [true, "Please provide a appropriate lecture tag"]
    },
    lectureId: {
        type : String,
        required : [true, "Please provide a appropriate lecture Id"]
    },

})

module.exports = mongoose.model("Lecture", lectureSchema)