const numero = [-1, 4, -2, -10, 8];

let positivos = 0; // Corrigindo a variável Positivos para seguir padrão de nomes
let negativos = 0;
let somaPositivos = 0; // Declarando somaPositivos corretamente

for (let i = 0; i < numero.length; i++) {
    if (numero[i] < 0) {
        negativos++; // Contando números negativos
    } else {
        somaPositivos += numero[i]; // Somando números positivos
    }
}

console.log(`Quantidade de números negativos: ${negativos}`);
console.log(`Soma dos números positivos: ${somaPositivos}`);
