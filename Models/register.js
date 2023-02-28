const mongoose=require('mongoose')
const registerSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    your_name:{
        type:String,
        required:true
    },
     date:{
         type:String,
         default:Date.now()
     }
})
module.exports=mongoose.model("register",registerSchema)
