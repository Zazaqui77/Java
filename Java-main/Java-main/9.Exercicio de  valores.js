const readline = require ('readline-sync')

const valorA =readline.questionInt('Digite um valor: ');
const valorB =readline.questionInt('Digite um valor: ');
const valorC =readline.questionInt('Digite um valor: ');
let soma = valorA + valorB 
if (soma < valorC) {
    console.log('A soma de A e B é menor que C');
} else {
    console.log('A soma de A e B é maior que C');
}
if (soma === valorC) {
    console.log('A soma de A e B é igual a C');
}
