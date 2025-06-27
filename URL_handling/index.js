
const http = require('http');
const fs = require('fs');
const url = require('url');
const { console } = require('inspector');

const myServer = http.createServer((req,res) => {
  if(req.url ==='/favicon.ico'){
    return;
  }
    const log = `New Request Received : ${new Date().toLocaleString()} : Path : ${req.url}\n`;

    const myUrl = url.parse(req.url,true);
    console.log(myUrl);



  fs.appendFile('server.log', log, (err,result) => {
    if(err){
        console.log("Error found");
    }
    else{
        console.log(result);
        }
  })

switch(myUrl.pathname){
  case '/' : {
   
    res.end("This is homepage");
  }
  break;

  case '/about' : {

    res.end("This is about page");
  }
  break;

  case '/contact-us' : {
    res.end("This is a contact page");
  }
  break;

  default : {

    res.end("404 Page not found");
  }
}
 

});


myServer.listen(8000,() => console.log("Server Started"));

