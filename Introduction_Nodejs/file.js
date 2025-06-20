// nodejs architecture examples

// Synchronous... Blocking Operations
// console.log("1");

// const res = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(res);
// console.log("2");
// console.log("3");

// Asynchrounous... Non - Blocking Operations
// console.log("1");

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//   console.log(result);
// });

// console.log("2");
// console.log("3");

/////////////////////////////////////////
// Default Thread Pool size in a system -> 4

// Max Thread pool size in a system is based on its core.
const os = require("os");
let res = os.cpus().length;
console.log(res)
