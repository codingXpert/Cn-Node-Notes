const fs = require('fs');
const path = require('path');

const filePath = path.join('../AsyncFileSystem/info.txt');
const filePathResolved = path.resolve('../AsyncFileSystem/info.txt');
const fileExtension = path.extname(filePathResolved);
console.log(filePath);
console.log(filePathResolved);
console.log(fileExtension);

fs.readFile(filePathResolved, (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});


/** Note:-
 * Instead of using path module we can also pass the the exact path to the fs.readFile(filePathResolved, (err, data) => {})
 * which will print the same output , then the question is why we are using path module.
 * This is because in different operating system the location of the file/folder is 
 * accessed vie different syntaxes and this will create an issue when we run the same code
 * on different OS.
 * So to overcome this problem we use path module , which provide us a generalized path.
 */


/** Note:- 
 * Q>> What is difference b/w path.join() and path.resolve()?
 * Ans>> Both the functions are used to find the path.
 * path.join(): Gives us the required path only(..\AsyncFileSystem\info.txt)
 * But the path.resolve gives us the complete absolute path(V:\node js\Cn Node Notes\AsyncFileSystem\info.txt)
 */
