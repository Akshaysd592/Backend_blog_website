const Post = require("../models/postModel");

exports.createPost = async (req,res)=>{
    try{
        const {title,body} = req.body;  // data going from postman 
        const post = new Post({
            title,body,
        })
        const savedPost = await post.save();

       res.json({
        post:savedPost,
       })

    }
    catch(error){
        return res.status(400).json({
            error:"Error while creating a post"
        });
    }
};


exports.getAllPosts = async(req,res)=>{
     try{
            const posts = await Post.find()
            // .populate("likes") // show data in like and comment array
            .populate("comments").exec();


            res.json({
                posts,
            })
     }
     catch(error){
        return res.status(500).json({
            error:"Error while fetching posts",
           })
     }
}


exports.deletePosts = async (req,res)=>{
          try{
            const {id} = req.body;

            await Post.findByIdAndDelete(id);
    
            res.json({
                success:true,
                message:"Post DELETED",
            })
          }
          catch(error){
            return res.status(500).json({
                error:"Not possible to delete post",
            })
          }
}