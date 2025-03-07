/* 

Escribe un programa de JS que solicite al usuario ingresar el numero de dias y calcule el numero equivalente de meses y dias restantes,
considerando que un mes consta de 30 dias.

Este programa utiliza prompt-sync para las entradas, despues calcular la cantidad de meses y dias restantes segun la entrada, el programa muestra un mensaje
al usuario el equivalente en meses y dias restantes.

Utilizar el math.floor() para redondear el resultado a un numero entero

Si el usuario ingresa 100, el output es 100 days are 3 months and 10 days
*/

const prompt = require('prompt-sync')()

const daysInMonth = 30
let daysToTransform = parseInt(prompt('Input the days: '))

let months = Math.floor(daysToTransform / daysInMonth)
let days = daysToTransform % daysInMonth

console.log(`${daysToTransform} days are ${months} months and ${days} days`)
