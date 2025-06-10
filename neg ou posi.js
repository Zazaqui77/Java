console.clear()
const readline = require('readline-sync')
console.log("")
const num = readline.questionInt("digite o numero: ")

function verificando(){

    if (num < 0){
        console.log("O número é negativo")
    } else if (num > 0){
        console.log("O número é positivo")
    }
}

verificando(num)