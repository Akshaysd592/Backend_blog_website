const mongoose = require("mongoose");

// routehandler
const commentShema = new mongoose.Schema({
       post:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"Post", // reference to post model
       },
       user:{
         type:String,
         required:true,
       },
       body:{
        type:String,
        required:true,
       }
});


// export

module.exports = mongoose.model("Comment",commentShema);
// exporting  commentShema as Comment;








// export 





