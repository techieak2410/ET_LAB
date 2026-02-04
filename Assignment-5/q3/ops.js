import http from "http";
import fs from "fs";


const server= http.createServer((req,res)=>{
    const url=req.url;
    console.log(url);

    fs.readFile("./index.html", "utf-8", (err, data)=>{
            if(err){
                res.write("<h1>500: Internam Server Error</h1>");
            } else {
                res.write(data)
            }
            res.end()
        })
    
})

function readops(){
    
}

server.listen(5000,()=>{
    console.log("server Started !")
})