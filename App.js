let a = "Hello "
let b = "Mundo"
let c = ","
let d = " Danilo!"
let clc = require("cli-color")

function mensagen(a, b, c, d) {
    console.log(clc.red.bgWhite.underline(a + b + c + clc.green(d)))
}

mensagen(a, b, c, d)

const funcoes = require("./funcoes.js")
let resultado = funcoes.validar("Danilo", "1234")

console.log(resultado)