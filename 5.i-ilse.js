const readline = require('readline-sync')

 const idade = readline.question('Digite a sua idade: ')

if (idade > 18)  {
    console.log('Maior de idade: ')
}else if (idade >= 14) {
    console.log('Adolescente')
}else {
    console.log('Menor de idade')
}
