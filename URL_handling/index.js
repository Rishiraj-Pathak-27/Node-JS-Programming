const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }

  const log = `${new Date().toLocaleString()} : Path : ${req.url}\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile("./server.log", log, (err, result) => {
    if (err) {
      res.end("Error found!");
    } else {
      res.end(result);
    }
  });

  switch (myUrl.pathname) {
    case "/":
      {
        res.end("Home Page");
      }
      break;

    case "/about":
      {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("About Me: ");
        const qp = myUrl.query.name;
        const qpTwo = myUrl.query.userid;
        res.end(`My name is "${qp}" & my user id is "${qpTwo}"`);
      }
      break;

    case "/contact-us":
      {
        res.end("Contact Page");
      }
      break;

    case "/search":
      {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Search Items: ");
        const qp = myUrl.query.search;
        res.end(`"${qp}"`);
      }
      break;
    default: {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Page not found");
    }
  }
});

myServer.listen(8000, () => console.log("Server Started"));
