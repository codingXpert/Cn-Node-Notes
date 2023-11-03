const fs = require('fs');

//=========================== Reading The File ========================
fs.readFile('info.txt', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});

console.log("Now this will print before reading the file");

