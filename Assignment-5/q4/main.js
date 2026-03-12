const express = require('express')
const path = require('path')

const server = express();
server.use(express.static(path.join(__dirname, "asset")))

// routes
server.get("/", (req, res)=>{
    res.send("<h1>Home Page h Mam </h1>")
})

server.get("/about", (req, res)=>{
    res.send("<h1>About Page h Sir</h1>")
})

server.listen(5000, ()=>{
    console.log("Express Server Started")
})