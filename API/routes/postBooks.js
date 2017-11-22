'use strict';
const bookModel = require('../models/book.model');
const authorModel = require('../models/author.model');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    let newBook = req.body;
    let code = res.statusCode;

    newBook.recommendations = bookModel.recommendations;
    newBook.dateWritten = bookModel.dateWritten;
    newBook.bookName = bookModel.bookName;
    newBook.author = bookModel.author;
    newBook.genre = bookModel.genre;
    newBook.about = bookModel.about;

    bookModel.save()
        .then(() => {
            authorModel.findOne({
                    author: newBook.author
                })
                .then((author) => {
                    if (!author) {
                        newBook.author = authorModel.author;
                        [newBook] = authorModel.books;
                    } else {
                        authorModel.books.push(newBook);
                    }
                    authorModel.save()
                        .then((author) => {
                            res.json({
                                code,
                                author
                            });
                        })
                        .catch((err) => {
                            res.json({
                                code,
                                err
                            });
                        })
                })
        })
        .catch((err) => {
            res.json({
                code,
                err
            });
        })
});

module.exports = router;
