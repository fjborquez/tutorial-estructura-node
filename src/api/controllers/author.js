const AuthorService = require('../../services/author');
const BookService = require('../../services/book');
const Author = require('../../models/author');
const mongoose = require('mongoose');

module.exports = {
    createAuthor: async(name) => {
        const author = new Author({
            _id: new mongoose.Types.ObjectId(),
            name: name
        });
        try {
            await AuthorService.checkauthorSalesStatus();
            await BookService.checkAvailableBooksByAuthor(name);
            const newAuthorEntry = await author.save();
            return newAuthorEntry;
        } catch (error) {
            throw error;
        }
    },

    getAuthor: async(id) => {
        // ..
    },

    getAllAuthors: async() => {
        // ...
    }
}