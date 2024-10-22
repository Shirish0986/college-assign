const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');

// POST - Add a new book
router.post('/books', async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json({ message: "Book added successfully", book });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET - Get all books
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
