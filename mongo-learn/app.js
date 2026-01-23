const express = require('express');

const app = express();

const userModel = require("./usermodel");

app.get('/',(req,res)=>{
    res.send("hey");
});

app.get('/create',async (req,res)=>{
   let createdUser = await userModel.create({
        name:"harsh",
        username:"harsg12143",
        email:"harsh@gmail.com"
    });
    res.send(createdUser)
});

app.get('/update',async (req,res)=>{
  let updatedUser = await userModel.findOneAndUpdate({name:"harsh"},{username:"harsh123"},{new:true});
    res.send(updatedUser)
});



app.listen(3000)