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


// ===================== Append/Update Data In Existing File ===========================
fs.appendFile('employee.txt', '\nName: Vivek Raj', (err) => {   // if no file is there a new file will be created by employee.txt and data is saved into it otherwise the data is appended to the sane existing file.
    if(err){                                                 // if we run the code again it will create a new data.
        console.log(err);
    }else{
        console.log('Data/file is appended/updated');
    }
});
console.log('This will print before appending/updating the data');


// ========================= Deleting An Existing File ===============================
fs.unlink('employee.txt', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log('File is deleted');
    }
});