// 'fs' -> files system is a built-in module from the node directory
const fs = require("fs");

// Create & Write the file using the writeFileSync

// Synchronous (Blocking Operation) -> can return the result by storing it into a variable.

fs.writeFileSync("./test.txt", "Hello world from Node JS.");

// Asynchronous (Non-Blocking Operations) -> cannot return the result by storing it into a variable

fs.writeFile("./test.txt", "Hello World from John", (err) => {});

// Read the file

// Synchronous (Blocking Operations) -> can return the result by storing it into a variable

const res = fs.readFileSync("./contacts.txt", "utf-8");
console.log(res)

// Asynchronous (Non-Blocking Operations) -> cannot return the result by storing it into a variable

fs.readFile("./contacts.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error found", err);
  } else {
    console.log(result);
  }
});

// Appending into a file

// Synchronous (Blocking Operations) -> can return the result by storing it into a variable.

fs.appendFileSync("./test.txt", new Date().toLocaleString());

// Asynchronous (Non-Blocking Operations)

fs.appendFile("./test.txt", new Date().toLocaleString());

// Copy files

// Synchronous (Blocking Operations)

fs.copyFileSync("./test.txt", "./copy.txt");

// Asynchronous (Non-Blocking Operations)

fs.copyFile('./test.txt', './copy.txt')
// copy contents of test.txt file --> copy.txt file

// delete files
fs.unlinkSync('./copy.txt');



