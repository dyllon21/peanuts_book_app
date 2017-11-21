function takeBook(database,book,res,recommendation){
  database.findById(book,
   function(err,bookFound){
     if (err){
       console.log("Oh no!" + err)
     } else if (bookFound){
       bookFound.availability = true;
       bookFound.currentUser = null;
       if (recommendation == true){
         bookFound.recommendations++
       }

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
