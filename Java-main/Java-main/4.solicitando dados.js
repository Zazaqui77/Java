 // Instalar: nmp install readline-sync

 const readline = require('readline-sync')

 const idade = readline.question('Digite a sua idade: ')

if (idade < 18)  {
    console.log('Menor de idade')

} else {
    console.log('Maior de idade')

}
