function bookSearch(database,res,query){
  database.find(query, function(err,results){
    var booksResult = [];
    if (err){
      console.log(err)
    } else if (!results){
      booksResult = "No books found!"
    } else if (results){
      results.forEach(function(stock){
        booksResult.push(stock)
      })
    }
    res.send(booksResult);
  })
}

module.exports = bookSearch;
