const fs = require('fs');
 
// To read file content using blocking code(executed by main thread)

// =========================== Reading A FIle ===========================
console.log("Starting to read");

// const result = fs.readFileSync('data.txt');
// console.log(result.toString());

const result = fs.readFileSync('data.txt', {encoding: 'utf-8'}); 
console.log(result);

console.log("This message is logged after file is loaded");


//======================== Creating And Writing A File=========================
try {
    fs.writeFileSync('employee.txt', 'Name: Ranjeet, Role: Teacher, NAtionality: Indian'); // create the file by the name employee.txt if not created and save the data.
} catch (error) {
    console.log(error);
}


/* 
Note:- The fs.readFileSync will internally create a buffer as temporary memory to maintain the speed of fetching data from data.txt and printing them to the terminal.
 we have to convert the returned the buffer to sting using toString() method to get the actual result or we can pass the encoding method as option while fetching the file 
 to get the desired result.
*/