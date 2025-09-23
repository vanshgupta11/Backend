const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.listen(3000 ,()=>{
    console.log("server started at port no. 3000");
    
})
app.get('/',(req,res)=>{
    res.send("heloooooooooooooo");
})

app.post('/api/cars',(req,res)=>{
    const {name,brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("car submitted sucessfully")
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=>{console.log("connection sucessfull")})
.catch((error)=>{console.log('error recieved')})