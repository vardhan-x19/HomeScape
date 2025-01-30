const express=require('express');
const{deleteBooking}=require('../controllers/home')

// const path=require('path');
const locRouter=express.Router();

locRouter.get('/location',(req,res)=>{
  res.render('store/location',{title :'airbnb-location'});
})
locRouter.get('/deleteBooking/:homeid',deleteBooking)
module.exports ={
  locRouter:locRouter
}