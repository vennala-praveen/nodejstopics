const express = require('express');
const sql = require('mysql');



const app = express();

app.listen(5000,()=>{
    console.log("Server started at port 5000");
});


app.get('/mobile',(req,res)=>{
    res.send("mobile data success")
});


app.post('/mobile',(req,res)=>{
    res.send("mobile data success!")
});


app.put('/mobile',(req,res)=>{
    res.send("mobile data success!!")
});


app.delete('/mobile',(req,res)=>{
    res.send("mobile data delete")
});