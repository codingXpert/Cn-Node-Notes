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
    fs.writeFileSync('employee.txt', 'Name: Ranjeet, Role: Teacher, Nationality: Indian'); // create the file by the name employee.txt if not created and save the data.
} catch (error) {
    console.log(error);
}


//==================== Appending More Data To The Existing File=================
fs.appendFileSync('employee.txt', 'Name: Pratap, Role: Fresher, Nationality: Indian');



// ===================== Deleting An Existing File =========================
try {
    fs.unlinkSync('employee.txt')
} catch (error) {
    console.log('File Does Not Exist');
}


/* 
Note:- The fs.readFileSync will internally create a buffer as temporary memory to maintain the speed of fetching data from data.txt and printing them to the terminal.
 we have to convert the returned the buffer to sting using toString() method to get the actual result or we can pass the encoding method as option while fetching the file 
 to get the desired result.
*/


/*
Note: Why There Is fs.unlinkSync() Why Not fs.deleteSync() instead , this is because it is not
in the power or authority of node js to delete any file/folder as in some directory or folders the read/write/delete operations
are not allowed by operating system.

The actual deletion is done by OS.

The nlinkSync() is just used to delete/unlink the link between the operating system and the program and rest of the operations are 
handled by operating system itself
*/ 