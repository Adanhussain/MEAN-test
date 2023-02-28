const mongoose=require('mongoose')
const postSchema=mongoose.Schema({
    Blog_Content:{
        type:String,
        required:true
    },
    blog_title:{
         type:String,
         required:true
     },
     category:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
     date:{
         type:String,
         default:Date.now()
     }
})
module.exports=mongoose.model("post",postSchema)



