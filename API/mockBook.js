const takenBooks = function(req, res, next) {
    var requestId = req.params.id;

    models.bookModel.findOneAndUpdate({
      _id : ObjectId(requestId)
    }, {
      $inc: {
        'timesTaken' : ++
      },
    }, {
      upsert : false

    }, function(err, result){
      if(err){
        return res.json({
          status : 'error',
          error : err,
          taken : []
        })
      }else {
        res.json({
          status : 'success',
          taken: result
        })
      }
    })

  };
