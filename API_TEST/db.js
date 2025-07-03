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
    return new Promise(function(success, reject){
        con.query(`SELECT * FROM mobile`,(err,rows,col)=>{
        if(err){
            reject("error");
        }else{
            success(rows);
        }
    })
    })
}

function addMobile(b,m,p,s,ram,batt,release_year,in_stock){
    return new Promise(function(success, reject){
        con.query(
        `INSERT INTO mobile(brand,model,price,storage,ram,battery,release_year,in_stock) VALUES(?,?,?,?,?,?,?,?)`,[b,m,p,s,ram,batt,release_year,in_stock], function(err,rows, col){
            if(err){
                reject("Error");
            }else{
                success(rows);
            }
        }
    )
    })
}


function updateMobile(id,b,m,p,s,ram,batt,release_year,in_stock){
    return new Promise(function(success, reject){
        con.query(
        `UPDATE mobile SET brand=?, model=?, price=?, storage=?, ram=?, battery=?, release_year=?, in_stock=? WHERE id=?`, [b,m,p,s,ram,batt,release_year,in_stock,id], function(err,rows,col){
            if(err){
                reject("Error");
            }else{
                success(rows);
            }
        }
    )
    })
}


function deleteMobile(id){
    return new Promise(function(success, reject){
        con.query(
        `DELETE mobile WHERE id=?`,[id], function(err,rows){
            if(err){
                reject("Error");
            }else{
                success(rows);
            }
        }
    )
    })
}


module.exports = {
    getMobiles, addMobile, updateMobile, deleteMobile
}





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


