const express = require("express");
const path = require("path");
let app =express();

app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{

    res.end();

}).listen(3000);