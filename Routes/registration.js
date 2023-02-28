const express=require('express')
const router=express.Router()
const Register=require('../Models/register')

router.get('/',async(req,resp)=>{
   try{
    const GetAllRegister= await Register.find();
    resp.status(200);
    resp.json(GetAllRegister)
   }
   catch(err){
    resp.status(500);
    resp.json({message:err})
   }
})
router.delete('/:registerId',async (req,resp)=>{
  try{
    const deletedPost= await Register.deleteOne({_id:req.params.registerId});
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
    const newpost = new Register({
      email:req.body.email,
      password:req.body.password,
      your_name:req.body.your_name,

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
router.get('/:registerId',async (req,resp)=>{
  try{
    const GetSinglePost= await Register.findById(req.params.registerId);
    resp.status(200);
    resp.json(GetSinglePost)
   }
   catch(err){
    resp.status(500);
    resp.json({message:err})
   }
})
router.patch('/:registerId',async (req,resp)=>{
  try{
    const updatePost= await Register.updateOne(
      {_id:req.params.registerId},
      {
        $set:{
            email:req.body.email,
            password:req.body.password,
            your_name:req.body.your_name,
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

