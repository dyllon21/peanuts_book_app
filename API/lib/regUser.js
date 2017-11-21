function userAdd(newUser,newInput,res){
newUser.name = newInput.name;
newUser.booksRead = [];
newUser.save(function(err,savedShoe){
  if (err){
    console.log(err)
  }
  else {
    console.log("shoe saved");
    console.log(savedShoe);
    return
  }
})
}

module.exports = stockAdd;
