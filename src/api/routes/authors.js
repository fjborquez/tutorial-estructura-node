const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author');

/**
 * POST create /author
 */
router.post("/", async(req, res, next) => {
    const author = await authorController.createAuthor(req.body.name)
    res.status(201).json({
        message: "Created successfully",
        author
    })
});

module.exports = router;