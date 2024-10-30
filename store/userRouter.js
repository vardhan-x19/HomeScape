const express=require('express');

const userRouter=express.Router();

userRouter.get('/add-home',(req,res,next)=>{
  console.log('second middleWare',req.method);
  res.send(`<h1>rigister Now</h1>
    <form action="add-home" method="post">
    <input type="text" name="name" placeholder="enter your House-name">
    <input type="submit">
  </form>`);
})
userRouter.post('/add-home',(req,res,next)=>{
  console.log('third middleWare',req.method,req.body);
  res.send(`<h1>thanks for registering </h1>`);
})

module.exports=userRouter;