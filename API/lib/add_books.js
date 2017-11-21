function add_books(newStock, newInput, res){
  newStock.bookName = newInput.bookName;
  newStock.author = newInput.author;
  newStock.genre = newInput.genre;
  newStock.dateWritten = newInput.dateWritten;
  newStock.dateAdded = newInput.dateAdded;
  newStock.recommendations = newInput.recommendations;
  newStock.timesTaken = newInput.timesTaken;
  newStock.availability = newInput.availability;
  newStock.currentUser = newInput.currentUser;
  newStock.about = newInput.about;

  newStock.save(function(err, savedBook){
    if(err){
      console.log(err);
    }else{
      console.log('book saved');
      console.log('savedBook');
      return
    }
  })
};

module.exports = add_books;
