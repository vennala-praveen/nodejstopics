const express = require('express');
const mysql = require('mysql');



const app = express();

app.listen(5000,()=>{
    console.log("Server started at port 5000");
});


app.get('/test',(req,res)=>{
    res.send("Hello!! Test")
});