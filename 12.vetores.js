// Criando um vetor com 6 números
const numeros = [3, 8, 15, 22, 7, 10];

let pares = 0;
let impares = 0;

// Verificando quais números são pares e quais são ímpares
numeros.forEach(numero => {
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
});

console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);
