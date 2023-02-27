module.exports= reqFilter=(req,resp,next)=>{
    if(!req.query.age){
resp.send("you cannot Access this page")
    }
    else if (req.query.age<18){
        resp.send("you're under 18")
    }
    else{
        next()
    }
}