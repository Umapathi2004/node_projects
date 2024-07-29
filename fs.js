const {readFile} = require("fs");
const getText = (d) =>{
  readFile(d,"utf8",(err,result)=>{
    if(err){
      console.log(err);
      return;
    }
     console.log(result);
  });
}
const first = async ()=>{
   const data = await getText('./first.txt');
}
first();