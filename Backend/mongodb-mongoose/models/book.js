const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

// ✅ IMPORTANT: export MODEL, not schema
module.exports = mongoose.model("Book", bookSchema);
