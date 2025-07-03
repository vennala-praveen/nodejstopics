const sql = require('mysql2');

 const con = sql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'Root@455',
        database:'mobiles'
    }
)

function getMobiles(){
    con.query(`SELECT * FROM mobile`,(err,rows,col)=>{
        if(err){
            console.log("error");
        }else{
            console.log(rows);
            // console.log(col);
        }

        con.end();
    })
}

getMobiles()

// con.connect((err)=>{
//     if(err){
//         console.log('Connection Error:', err);
//         return;
//     }
//     console.log('Connection to MySQL');

//     con.query(`SELECT * FROM mobile`, (err, rows) =>{
//         if(err){
//             console.log('Query Error:', err);
//         }else{
//             console.log('Data:', rows);
//         }
//     })
// })