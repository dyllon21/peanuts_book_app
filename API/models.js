const mongoose = require('mongoose');

module.exports = function(mongoUrl) {
    mongoose.connect(mongoUrl);

    mongoose.connect(mongoUrl, {
        useMongoClient: true

      }, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Having Fun?");
        }
      })

      const UserSchema = mongoose.Schema({
        id : Number,
        name : String,
        booksRead : [];
      })

      const Registrations = mongoose.model('Registrations', UserSchema);

      const BookSchema = mongoose.Schema({

        bookName: String,
        author: String,
        genre: String,
        dateWritten: Number,
        dateAdded: Date,
        recommendations: Number,
        timesTaken: Number,
        availability: Boolean,
        currentUser: String,
        about: String
      });

      const Books = mongoose.model('Books', BookSchema);

      return {
        Books,
        Registrations
      };
    }
