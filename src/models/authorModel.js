const mongoose = require("mongoose")

const authorSchema  = new mongoose.Schema(
    {
        author_id: { type: Number,required: true },
        authorName: { type: String, unique: true },
        age: Number,
        address: String,
    },
    {timestamps: true}
);

module.exports = mongoose.model("Author",authorSchema);