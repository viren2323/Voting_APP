const  express=require('express');
const db=require('./db');
const app=express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

//

require('dotenv').config();
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');


// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);


// app.get('/',function(req,res){
//     res.send('hello world');
// })

// app.get('/hello',function(req,res){
//     res.send("welcome to you hotel");
// })



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});