const { log } = require("console");
let you = require("you");

you.createServer((req,res)=>{
    res.end("just for chicking purpose")
}).listen(3900,()=>{
    console.log("yes it is working")
})