// import models 

const Post = require("../models/postModel")
const Comment = require("../models/commentModel");


// bussiness login 

exports.createComment = async (req,res)=>{
    try{
          const{post,user,body} = req.body;

          //creating a object
          const comment = new Comment({
            post,user,body,
          });

           // save data
           const saveComment  = await comment.save();

           // post collection also change
          const updatedPost =  await Post.findByIdAndUpdate(post,{$push:{comments:saveComment._id}},{new:true})
               .populate("comments") // populate comment array with comment document showing data in commments
               .exec()


               res.json({
                 post:updatedPost,
               });
    }
    catch(error){
       return res.status(500).json({
        error:"Error while creating comment",
       })
    }
}