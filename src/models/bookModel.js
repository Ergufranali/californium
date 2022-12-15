const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    category: {
        type: String,
        enum: ["Action and Adventure", "motivational", "financial", "Historical Fiction","horror"]
    },
    year: Number,
}, { timestamps: true });''

module.exports = mongoose.model('book', bookSchema) 