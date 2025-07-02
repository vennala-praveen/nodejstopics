function test(){
    console.log("test")
}

function sum(a,b){
    console.log(a-b);
}

let obj = {
    name: "Tony",
    age: 56
}

// add(55,17);
// test();

module.exports = {
    test, sum, obj
}