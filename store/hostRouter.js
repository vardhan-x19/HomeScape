const express=require('express');

const hostRouter=express.Router();

hostRouter.get('/',(req,res,next)=>{
  res.send(`<h1>this is home page</h1>
    <a href="add-home">addhome</a>`);
})

module.exports=hostRouter;