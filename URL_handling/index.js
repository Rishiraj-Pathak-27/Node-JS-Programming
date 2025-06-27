const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return;
  }
  const log = `New Request Received : ${new Date().toLocaleString()} : Path : ${
    req.url
  }\n`;

  const myUrl = url.parse(req.url, true);
  // to access the query parameters directly from the object.
  // console.log(myUrl.query.name);
  // console.log(myUrl.query.userid);
  console.log(myUrl);

  fs.appendFile("server.log", log, (err, result) => {
    if (err) {
      console.log("Error found");
    } else {
      console.log(result);
    }
  });

  switch (myUrl.pathname) {
    case "/":
      {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("Home Page");
      }
      break;

    case "/about":
      {
        res.writeHead(200, { "content-type": "text/plain" });
        res.write(`About Me:\n`);
        const qp = myUrl.query.name;
        const qpTwo = myUrl.query.userid;
        res.end(
          `My name from query parameters is '${qp}' & user id is "${qpTwo}"`
        );
      }
      break;

    case "/contact-us":
      {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("This is a contact page");
      }
      break;

    case "/search":
      {
        res.writeHead(200, { "content-type": "text/plain" });
        res.write(`Your Search Items: \n`);
        // below qp will contain all the query from the url
        const qp = myUrl.query;
        // counter used to count the total number of search items
        let count = 0;
        // for...in used to iterate over the object properties
       for(key in qp){
        // this if statement will only print the search items from the query parameters
        if(key.startsWith('search')){
        res.write(`- ${key} = "${qp[key]}"\n`);
        count++;
       }
      }
      res.end(`Total search items = ${count}`);
      }
      break;
    default: {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("404 Page not found");
    }
  }
});

myServer.listen(8000, () => console.log("Server Started"));
