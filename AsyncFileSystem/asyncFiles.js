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


// ======================== Writing A File ============================
fs.writeFile('employee.txt', 'Name: Rahul Kumar', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('File Is Written');
    }
});
console.log('This will print before writing the file');
