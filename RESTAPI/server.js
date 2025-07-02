const exp = require('express');

const app = exp();

app.listen(4500, ()=>{
    console.log("server started");
});

app.get('/x',(req,res)=>{
    // res.send("Hello received get request")
    res.sendFile(__dirname + '/index.html')
});


app.post('/x',(req,res)=>{
    res.send("Hello received post request")
});


app.put('/x',(req,res)=>{
    res.send("Hello received put request")
});

app.delete('/x',(req,res)=>{
    res.send("Hello received delete request")
});