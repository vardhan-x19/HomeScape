const express=require('express');

const app=express();

const hostRouter=require('./store/hostRouter');
const userRouter=require('./store/userRouter');

app.use(express.urlencoded());
app.use(hostRouter);
app.use(userRouter);

const PORT=3000;
app.listen(PORT,()=>{
  console.log(`the server running on port http://localhost:${PORT}`);
})