function takeBook(database,book,res,user){
  database.findById(book,
   function(err,bookFound){
     if (err){
       console.log("Oh no!" + err)
     } else if (bookFound){
       bookFound.timesTaken ++;
       bookFound.availability = false;
       bookFound.currentUser = user;
     }

     bookFound.save(function(err, updatedBook){
       if (err){
         console.log(err)
       } else if (updatedBook){
         console.log(updatedBook);
         res.send(bookFound);
       }
     })

   })

}

module.exports = takeBook;
