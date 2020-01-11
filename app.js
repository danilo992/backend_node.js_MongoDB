let http = require("http")

http.createServer(function(require, response){
    response.write("node.js")
    response.end()
}).listen(8080)

console.log("servidor rodando")