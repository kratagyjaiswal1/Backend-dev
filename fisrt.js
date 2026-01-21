const http = require("http");

HTMLOutputElement.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/html"});
    res.end("Server is running")

})
Server.listen(8000,()=>{
    console.log("server is running on port area")

})