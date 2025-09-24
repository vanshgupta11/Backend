const express = require('express'); 
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000 ;

app.use(express.json());

const todoRoutes = require('./routes/todo')

app.use("/api/v1",todoRoutes);

app.listen(PORT,()=>{
    console.log(`server started sucessfully at ${PORT}`)
})

const dbConnect = require('./config/database');
dbConnect();

app.get('/',(req,res)=>{
    res.send(`<h1> this is homepage </h1>`)
})
