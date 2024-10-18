const http = require("http");

const server = http.createServer((req,res)=>{
 if(req.url === "/"){
 res.write("Hi, This is my First Server.");
 res.end();
 }
 if(req.url === "/about"){
 res.write("Hi, This is my First Server in about.");
 res.end();
 }

})
server.listen(5500);