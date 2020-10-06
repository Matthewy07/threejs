let express = require("express");
let THREE = require("three");
let path = require("path");
let app = express();

app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{

    res.end();
}).listen(3000,()=>{
    console.log("Serverring..")
});