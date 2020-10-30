let express = require("express");
let app =express();
let path = require("path");


app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"/node_modules")));


app.get("/",(req,res)=>{
    res.end();
}).listen(4500);