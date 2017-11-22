'use strict';
const bookModelImport = require('../models/book.model');
const bookModel = new bookModelImport;
const authorModelImported = require('../models/author.model');
const authorModel = new authorModelImported;
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    let newBook = req.body;
    let code = res.statusCode;

    console.log(newBook);

    bookModel.recommendations = newBook.recommendations;
    bookModel.dateWritten = newBook.dateWritten;
    bookModel.bookName = newBook.bookName;
    bookModel.author = newBook.author;
    bookModel.genre = newBook.genre;
    bookModel.about = newBook.about;

console.log(bookModel);

    bookModel.save()
        .then(() => {
            authorModelImported.findOne({
                    author: newBook.author
                })
                .then((author) => {
                    if (!author) {
                        newBook.author = authorModel.author;
                        [newBook] = authorModel.books;
                    } else {
                        authorModelImported.books.push(newBook);
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
