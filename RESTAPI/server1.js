const express = require('express');

const app = express();

// app.get('/', function(req,res){
//     // res.send("Hello!");
//     if(req.query.city){
//         res.send(`Hello welcome to ${req.query.city}`)
//     }else{
//         res.send("Hello!!!")
//     }
// });

app.get('/xyz/:city', function(req,res){
    // res.send("Hello!");
    if(req.params.city){
        res.send(`Hello welcome to ${req.params.city}`)
    }else{
        res.send("Hello!!!")
    }
});



app.listen(4501, function(){
    console.log("Hello!! sever started");
});