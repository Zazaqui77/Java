// npm install readline-sync
console.clear()

const readline = require('readline-sync')
console.log("")
let A = readline.questionInt("Digite um numero para A: ")
console.log("")
let B = readline.questionInt("Digite um numero para B: ")
console.log("")
let C = readline.questionInt("Digite um numero para C: ")
console.log("")

resultado = A+B 

if (A+B < C){
    console.log(`a soma de A+B(${resultado}) é menor que C(${C})`)
}else if (A+B >C){
    console.log(`a soma de A+B(${resultado}) é maior que C(${C})`)
}