let http = require("http")
let fs = require("fs")

http.createServer(function(request, response){
    fs.readFile("index.html", function(erro, conteudo) {
        if(erro) {
            console.log(erro)
        }
        else {
            response.write(conteudo)
        }
        response.end()
    })


}).listen(8089)

console.log("servidor rodando")