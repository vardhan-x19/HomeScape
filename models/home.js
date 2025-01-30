// const db = require("../utils/databaseUtil");
const { ObjectId } = require('mongodb');
const { getDB } = require("../utils/databaseUtil");


module.exports=class Home {
  constructor(houseName,loc,imgUrl,price,desc,id) {
    this.loc=loc,
    this.imgUrl=imgUrl;
    this.houseName=houseName;
    this.price=price;
    this.desc=desc;
  }
  
  save(){
   const db=getDB();
   return db.collection('home').insertOne(this);
  }

  updateById(homeid) {
    
  }
  

  static fetchAll(){
    const db=getDB();
    return db.collection('home').find().toArray();
  }

  // static findById(homeid){
  //   const db=getDB();
  //   return db.collection('home').findOne();
  // }

  static findById(homeid) {
    const db = getDB(); // Assumes `getDB()` provides a valid MongoDB database instance.
    return db.collection('home').findOne({ _id: new ObjectId( homeid ) });
  }
  

  static deleteById(homeid) {
    const db = getDB(); // Assumes `getDB()` provides a valid MongoDB database instance.
    return db.collection('home').deleteOne({ _id: new ObjectId( homeid ) });
  }
  
  static getFavs() {
   
  }
  
  static addFavs(data){
   
  }
  
  static delFavs(homeid){
   
  }

  
}