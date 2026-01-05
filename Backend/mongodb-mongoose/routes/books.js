const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

/* CREATE */
router.post("/", async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

/* READ ALL */
router.get("/", async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

/* READ ONE */
router.get("/:id", async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book);
});

/* UPDATE */
router.put("/:id", async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updatedBook);
});

/* DELETE */
router.delete("/:id", async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted successfully" });
});

module.exports = router;
