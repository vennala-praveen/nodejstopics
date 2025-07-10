var express = require('express');
var app = express();

app.listen(5000, ()=>{
    console.log("Server started");
});

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/login.html')
})