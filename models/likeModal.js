const mongoose = require("mongoose");

// routehandler

const  likeShema = new mongoose.Schema(
    {
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post", // reference to post model
          },
          user:{
            type:String,
            required:true,
          },

    }
);


module.exports = mongoose.model("Like",likeShema);
