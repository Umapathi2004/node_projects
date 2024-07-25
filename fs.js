const http = require("http");
const server = http.createServer((req,res)=>{
   console.log("hi");
   if(req.url=="/about"){
    res.write("hi");
    res.end();
   }
})
server.listen(5000);