<h1 align="center">Node JS Architecture</h1>

![alt text](https://miro.medium.com/v2/resize:fit:1400/1*U_zyHnKdlvjCdAQkoh0uuQ.png)

## Synchronous... Blocking Operations

console.log("1");

const res = **fs.readFileSync("./contacts.txt", "utf-8");**

console.log(res);

console.log("2");

console.log("3");

### Output:

![alt text](image.png)

## Asynchrounous... Non - Blocking Operations

console.log("1");

**fs.readFile("./contacts.txt", "utf-8", (err, result) => {**

console.log(result);

});

console.log("2");

console.log("3");

### Output:

![alt text](image-1.png)
