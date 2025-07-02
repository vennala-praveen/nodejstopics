const { error } = require('console');


//readFile

let fileSys = require('fs')

fileSys.readFile('./note.txt',(error,data)=>{
    if(error){
        console.log("file not found");
    }else{
        console.log(data.toString());
    }
})

//fileSys.readFileSync

console.log("before reding");

//writeFile

// fileSys.writeFile('./note.txt',"Updating some topics",(error)=>{
//     if(error){
//         console.log("write not success");
//     }else{
//         console.log("write success");
//     }
// })

// console.log("before write");


//updateFile -- appendFile (note1.txt)

// fileSys.appendFile('./note.txt',"Updating some topics",(error)=>{
//     if(error){
//         console.log("write not success");
//     }else{
//         console.log("write success");
//     }
// })

// console.log("before write");

//deleteFile

// fileSys.unlink('./note.txt',(error)=>{
//     if(error){
//         console.log("delete not success");
//     }else{
//         console.log("delete success");
//     }
// })

// console.log("before delete");

//folder (rmdir - delete) (mkdir - folder) (readdir - folder read) 

// fileSys.mkdir('./test',(error)=>{
//     if(error){
//         console.log("folder not created");
//     }else{
//         console.log("folder created");
//     }
// })

// console.log("before delete");