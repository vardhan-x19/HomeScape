const { getDB } = require("../utils/databaseUtil");
const { ObjectId } = require('mongodb');
module.exports=class Bookings {
  constructor(houseName,loc,imgUrl,price,desc,id) {
    this.loc=loc,
    this.imgUrl=imgUrl;
    this.houseName=houseName;
    this.price=price;
    this.desc=desc;
  }
 static getBookings(){
    const db=getDB();
    return db.collection('bookings').find().toArray();
  }
 static addBooking(data){
    const db=getDB();
    return db.collection('bookings').insertOne(data);
  }
  static deleteById(homeid){
    const db = getDB(); // Assumes `getDB()` provides a valid MongoDB database instance.
    return db.collection('bookings').deleteOne({ _id: new ObjectId( homeid ) });
  }
}