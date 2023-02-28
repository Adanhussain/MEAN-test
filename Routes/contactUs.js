const express=require('express')
const router=express.Router()
const Contact=require('../Models/contact')

router.get('/',async(req,resp)=>{
   try{
    const GetAllMessage= await Contact.find();
    resp.status(200);
    resp.json(GetAllMessage)
   }
   catch(err){
    resp.status(500);
    resp.json({message:err})
   }
})
router.delete('/:messageId',async (req,resp)=>{
  try{
    const deletedPost= await Contact.deleteOne({_id:req.params.messageId});
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
    const newpost = new Contact({
      name:req.body.name,
      email:req.body.email,
      message:req.body.message,

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
router.get('/:messageId',async (req,resp)=>{
  try{
    const GetSinglePost= await Contact.findById(req.params.messageId);
    resp.status(200);
    resp.json(GetSinglePost)
   }
   catch(err){
    resp.status(500);
    resp.json({message:err})
   }
})
router.patch('/:messageId',async (req,resp)=>{
  try{
    const updateMessage= await Contact.updateOne(
      {_id:req.params.messageId},
      {
        $set:{
          name:req.body.name,
          email:req.body.email,
          message:req.body.message,
        }
      });
    resp.status(200);
    resp.json(updateMessage)
   }
   catch(err){
    resp.status(500);
    resp.json({message:err})
   }
})
module.exports=router

