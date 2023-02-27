const express=require('express')
const app=express();
const mongoose=require('mongoose')
require('dotenv/config')
const postRoutes=require('./Routes/posts')
const bodyParser=require('body-parser')


//middle ware for json data 
app.use(bodyParser.json())

//import the routes
app.use('/posts',postRoutes)
app.listen(8080)


//connect to mongo db 
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("connected")
}).catch((err)=>{
    console.log("error",err)
})


app.get('/',(req,resp)=>{
    resp.send("this is the start of the port")
})