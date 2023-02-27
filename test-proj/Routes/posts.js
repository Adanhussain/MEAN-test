const express=require('express')
const router=express.Router()
const Post=require('../Models/post')

router.get('/',async(req,resp)=>{
   try{
    const GetAllPost= await Post.find();
    resp.status(200);
    resp.json(GetAllPost)
   }
   catch(err){
    resp.status(500);
    resp.json({message:err})
   }
})
router.delete('/:postId',async (req,resp)=>{
  try{
    const deletedPost= await Post.deleteOne({_id:req.params.postId});
    resp.status(200);
    resp.json(deletedPost)
   }
   catch(err){
    resp.status(500);
    resp.json({message:err})
   }
})
router.post('/',async (req,resp)=>{
    try {
    const newpost = new Post({
        title:req.body.title,
        description:req.body.description
    });

    const post = await newpost.save();
    console.log("save to mongoose",post)
    resp.status(200).json(post);
  }
   catch (err) {
    console.log(err);
    resp.status(500).json(err);
  }
})
router.get('/:postId',async (req,resp)=>{
  try{
    const GetSinglePost= await Post.findById(req.params.postId);
    resp.status(200);
    resp.json(GetSinglePost)
   }
   catch(err){
    resp.status(500);
    resp.json({message:err})
   }
})
router.patch('/:postId',async (req,resp)=>{
  try{
    const updatePost= await Post.updateOne(
      {_id:req.params.postId},
      {
        $set:{
          title:req.body.title,
        description:req.body.description
        }
      });
    resp.status(200);
    resp.json(updatePost)
   }
   catch(err){
    resp.status(500);
    resp.json({message:err})
   }
})
module.exports=router

