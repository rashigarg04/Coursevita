const express = require('express');
const router = express.Router();

let books = [
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "Ikigai", author: "Héctor García" }
];

// LIST all books
router.get('/', (req, res) => {
    res.json(books);
});

// ADD a new book
router.post('/', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };

    books.push(newBook);

    res.json({
        message: "Book added successfully",
        data: newBook
    });
});

module.exports = router;
