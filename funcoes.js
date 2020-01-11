let clc = require("cli-color")

function validar(login, senha) {
    if (login == "Danilo" && senha == "1234")
    return (clc.green("Usuário Logado"))
    return (clc.red("senha ou login errado!"))
}

exports.validar = validar