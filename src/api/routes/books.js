const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book');

/**
 * POST create /book
 */
router.post("/authors", async(req, res, next) => {
    const book = await bookController.createBook(req.body.name)
    res.status(201).json({
        message: "Created successfully",
        book
    })
});

module.exports = router;