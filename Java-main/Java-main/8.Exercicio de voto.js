 const readline = require('readline-sync')

 const idade =  readline.question('Digite sua idade:')

if (idade < 16) {
    console.log('Você não pode votar')
} else if (idade >= 16 && idade < 18) {
    console.log('Você pode votar, mas o voto é opcional')
} else if (idade >= 18 && idade < 65) {
    console.log('Você não é obrigado a votar')
} else {
    console.log('Você não é obrigado a votar')
}
