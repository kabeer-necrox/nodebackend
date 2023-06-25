// console.log("check this is working or  not")


let http = require("http")


// here you need to develop your local server


http.createServer((req,res)=>{
    res.end("hello this is the node program")
}).listen(4500,()=>{
    console.log("check node is runngit at port 4500 or not")
}
)
