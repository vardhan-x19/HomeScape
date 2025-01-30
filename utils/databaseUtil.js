const mongoDB=require('mongodb');

const MongoClient=mongoDB.MongoClient;

const mongoUrl="mongodb+srv://root:root@vardhanx18.qks8s.mongodb.net/?retryWrites=true&w=majority&appName=vardhanx18";

let _db;

const mongoConnect=(callback)=>{
  MongoClient.connect(mongoUrl).then((client)=>{
    console.log('connected to database');
    _db =client.db("airbnd");
    callback();
  }).catch((err)=>{
    console.log('the error occure while db connecting',err);
  })
}

const getDB=()=>{
  if(!_db){
    throw new Error("error while db connecting");
  }
  return _db;
}

exports.mongoConnect=mongoConnect;
exports.getDB=getDB;