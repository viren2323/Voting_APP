const mongoose=require('mongoose');

const mongoURL='mongodb://localhost:27017/voting';

mongoose.connect(
    mongoURL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
);


const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connected successfully");
});
db.on('error',(err)=>{
    console.log("connection error",err);
});
db.on('disconnected',()=>{
    console.log("disconnected");
});

module.exports=db;