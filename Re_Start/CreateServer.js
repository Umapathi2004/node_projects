const http = require('http');
const Sever = http.createServer((req,res)=>{
 if(req.url=="/"){
    res.write("<h1>Home...</h1>");
    res.end();
 }
 else if(req.url=="/about"){
    res.write("<h1>Hi...</h1>");
    res.end();
 }
 else{
    res.write("<h1>404...</h1>");
    res.end();
 }
})
Sever.listen(5500);