

const prompt = require('prompt-sync')()

let n = parseInt(prompt('Introduzca un numero: '))


if (n == 0) {
    console.log('Cero')
} else if (n > 0) {
    console.log('Positivo')
} else if (n < 0) {
    console.log('Negativo')
} else {
    console.log('Porfavor, introduzca un numero')
}