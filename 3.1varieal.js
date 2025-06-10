// criando um vetor com numeros 

const listadeNumeros = [ 1, 2, 3, 4, 5]
console.log(listadeNumeros)

console.log('Listando todos os valores da lista: ')
console.log(listadeNumeros)

console.log('\nMultiplicando valores por 2: ')
const dobrados = listadeNumeros.map(numero => numero  * 2)
console.log(dobrados)

console.log('\nfiltrando elementos pares: ')
const pares = listadeNumeros.filter(numero => numero % 2 === 0)
console.log(pares)

console.log('\nsomando todos os numeros: ')
const soma = listadeNumeros.reduxe((soma, atual) => soma + atual, 0)
console.log(soma)