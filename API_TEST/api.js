const express = require('express');
const sql = require('mysql2');

const app = express();

const db = require('./db');
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(5000,()=>{
    console.log("Server started at port 5000");
});


app.get('/mobile',(req,res)=>{
    db.getMobiles()
    .then((mobile)=>{
        res.send(mobile)
    })

    .catch((err)=>{
        res.send(err)
    })
    
});


app.post('/mobile',(req,res)=>{
    db.addMobile(req.body.brand, req.body.model, req.body.price, req.body.storage, req.body.ram, req.body.battery, req.body.release_year, req.body.in_stock)
    .then((mobile)=>{
        res.send(mobile)
    })

    .catch((err)=>{
        res.send(err)
    })
});


app.put('/mobile',(req,res)=>{
    db.updateMobile(req.body.id, req.body.brand, req.body.model, req.body.price, req.body.storage, req.body.ram, req.body.battery, req.body.release_year, req.body.in_stock)
    .then(()=>{
        res.send(req.body)
    })

    .catch((err)=>{
        res.send(err)
    })
});


app.delete('/mobile',(req,res)=>{
    db.deleteMobile(req.body.id)
    .then((mobile)=>{
        res.send(mobile)
    })

    .catch((err)=>{
        res.send(err)
    })
});