'use strict';
const bookModel = require('../models/book.model');
const express = require('express');
const router = express.Router();


router.put('/:_id', (req, res) => {
    let code = res.statusCode;
    var bookReturned = req.body;

    var update = {
       $inc : {timesTaken : 1 },

    };

    console.log(updateInfo);

    bookModel.findOneAndUpdate({
      "id":bookReturned._id
    }, {

    })

});

module.exports = router;
